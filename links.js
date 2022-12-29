const axios = require("axios");
const { API, TOKEN } = require("./config");
const DEVICES = require("./DEVICES.json");
const LINKS = require("./LINKS.json");
const PATHS = require("./LINK_PATHS.json");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const format = {
  device1_ip: "128.10.81.132",
  device1_port: 3,
  device2_ip: "128.10.81.114",
  device2_port: 4,
  cur_status: "0",
  cur_update_time: "20220428113501",
  pre_status: "0",
  pre_update_time: "20220428113501",
  register_time: "20200423113528",
  distance: null,
  w_broken_distance: -1,
  e_broken_distance: -1,
  is_w_otdr: "N",
  is_e_otdr: "N",
  ring_id: "BRT_영상감지기",
};

const pathFormat = {
  device1_ip: "128.10.13.40",
  device1_port: 4,
  path_no: 0,
  lat: "37.624599576505936",
  lon: "126.83005763754272",
  bunker_distance: null,
};

function getDistance(lat1, lon1, lat2, lon2) {
  const unit = "K";
  if (lat1 == lat2 && lon1 == lon2) {
    return 0;
  } else {
    var radlat1 = (Math.PI * lat1) / 180;
    var radlat2 = (Math.PI * lat2) / 180;
    var theta = lon1 - lon2;
    var radtheta = (Math.PI * theta) / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit == "K") {
      dist = dist * 1.609344 * 1000;
    }
    return dist;
  }
}

async function main() {
  const LIN = LINKS.filter((item) => item.device2_ip && item.device1_ip);

  // ?모델 안맞는거
  // ?to ip 없는거

  const headers = {
    Authorization: "Bearer " + TOKEN,
  };

  try {
    const { data } = await axios({
      url: API + "/rings",
      params: { size: 10000 },
      headers,
    });

    const RINGLIST = data.data;

    const { data: portData } = await axios({
      url: API + "/devices/-/ports",
      params: { size: 200000 },
      headers,
    });

    console.log("🚀 ~ file: links.js:80 ~ main ~ portData", portData);
    const PORTLIST = portData.data;

    for (const item of LIN) {
      console.log("start", "---");
      // console.log("🚀 ~ file: links.js:67 ~ main ~ ", item);
      const ringId = RINGLIST.filter((ring) => ring.name === item.ring_id)[0]?.id;
      const fromDevice = DEVICES.filter((device) => device.ip === item.device1_ip)[0];
      const toDevice = DEVICES.filter((device) => device.ip === item.device2_ip)[0];
      const fromPort = PORTLIST.filter((port) => port.ip === fromDevice.ip && port.port === item.device1_port)[0];
      const toPort = PORTLIST.filter((port) => port.ip === toDevice.ip && port.port === item.device2_port)[0];

      const _paths = PATHS.filter(
        (path) => path.device1_ip === item.device1_ip && path.device1_port === item.device1_port
      );
      // console.log("🚀  _paths", _paths);

      const finalPaths = _paths.map((path, idx) => {
        const { lat, lon } = path;
        return {
          coordinate: {
            lat: parseFloat(lat),
            lng: parseFloat(lon),
          },
          type: idx === 0 ? "NONE" : "BUNKER",
          sort: idx,
          iconId: null,
          distance:
            idx === 0
              ? 0
              : getDistance(
                  parseFloat(lat),
                  parseFloat(lon),
                  parseFloat(_paths[idx - 1].lat),
                  parseFloat(_paths[idx - 1].lon)
                ),
        };
      });
      finalPaths.push({
        coordinate: {
          lat: parseFloat(toDevice.pos_lat),
          lng: parseFloat(toDevice.pos_lon),
        },
        type: "NONE",
        sort: finalPaths.length,
        iconId: null,
        distance: getDistance(
          parseFloat(_paths[_paths.length - 1].lat),
          parseFloat(_paths[_paths.length - 1].lon),
          parseFloat(toDevice.pos_lat),
          parseFloat(toDevice.pos_lon)
        ),
      });

      // console.log("🚀  finalPaths", finalPaths);
      // console.log("🚀 ~ file: links.js:67 ~ main ~ item", item);
      // console.log("🚀 ~ file: links.js:66 ~ main ~ fromDevice", { ip: fromDevice.ip, port: item.device1_port });
      // console.log("🚀 ~ file: links.js:66 ~ main ~ toDevice", { ip: toDevice.ip, port: item.device2_port });
      const distance = finalPaths.reduce((acc, cur) => acc + cur.distance, 0);

      const data = {
        ringId: ringId,
        deviceFromPortId: fromPort?.devicePortId,
        deviceToPortId: toPort?.devicePortId,
        distance: distance,
        maxDistance: 0, // 레거시 코드, 무시
        style: {
          color: "#6d5cae",
          weight: 4,
        },
        paths: finalPaths,
      };
      console.log("🚀 ~ file: links.js:155 ~ main ~ data", data);

      // await axios({
      //   url: "http://1.223.227.163:5000" + "/links",
      //   method: "PUT",
      //   headers,
      //   data,
      // });

      // await sleep(10000);
    }
  } catch (e) {
    console.log(e);
    console.log(e?.response?.data?.fields);
  }
}

main();
