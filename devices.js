const axios = require("axios");
const DEVICES = require("./DEVICES.json");
const MODELS = [
  {
    id: "02669392-d196-4f3b-999d-a5940066d061",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-10G8SF",
    webPort: 80,
    ports: 8,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "0ab563bb-f3e0-4e41-8777-1caca0ccac9e",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-24SF4XG",
    webPort: 80,
    ports: 28,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "17185190-aef0-4e2c-8e4a-2f13618ba43b",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-8G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "1c582407-61d2-4f2f-8a8a-cd19f12196ef",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-16G6SF",
    webPort: 80,
    ports: 6,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "2456fabc-ecb8-4aff-8595-79f39f6d1105",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-12G8SF",
    webPort: 80,
    ports: 8,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "272d60a2-8207-49a3-bd66-b00ead186d61",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-12G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "3d08a1fb-d8a9-4cd3-ad0c-43bb8256f3e0",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-10G6SF",
    webPort: 80,
    ports: 6,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "4249020f-dc9d-4bdb-9287-126d5ea112b1",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-48SF4XG",
    webPort: 80,
    ports: 52,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "468533a3-810b-4446-ad24-8a18e32619e1",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-8G6SF",
    webPort: 80,
    ports: 6,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "4b0839f7-fe97-4b0c-8503-79f2e50f0735",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-32SF4XG",
    webPort: 80,
    ports: 26,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "6b3d4b12-781a-4855-8d37-a7cbb7058bb9",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-16G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "750791cf-0ad5-4cba-9e8a-18a9e9ad2883",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-8G4SF",
    webPort: 80,
    ports: 4,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "79020c15-04a0-4ca5-812f-925b2f9dcf34",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-10G4SF",
    webPort: 80,
    ports: 4,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "7e188335-cf7f-468d-9de6-750e84c517fd",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-12G4SF",
    webPort: 80,
    ports: 4,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "838ec33f-eb21-4b59-a77f-1379dc303106",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-16G4SF",
    webPort: 80,
    ports: 4,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "b3be0ab9-a5a2-47a9-bd08-f52b01c9d727",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-6G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "bb1a1cfe-0d4f-4352-8186-05ed3df879a6",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-12G6SF",
    webPort: 80,
    ports: 6,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "bd6f3466-727b-4e3c-b9fe-dd036d9ecc66",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-16G8SF",
    webPort: 80,
    ports: 8,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "d46f9a5d-96cd-4779-a287-c34858bc70e6",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-6G4SF",
    webPort: 80,
    ports: 4,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "e8e782c4-cffc-4356-b171-c8160f9baa56",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-10G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
  {
    id: "eabebc7c-ecf3-4ab8-ba4b-db8bdf7e28b6",
    vendor: "HYESUNG",
    name: "HSTW-IEL-6800M-4G2SF",
    webPort: 80,
    ports: 2,
    properties: [],
    createdAt: "2022-12-12T15:53:26+09:00",
    modifiedAt: "2022-12-12T15:53:26+09:00",
  },
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const format = {
  ip: "192.168.87.51",
  device_id: "(20587)성저마을14단지",
  is_dual_power: "N",
  disp_priority: 1020,
  comments: "",
  pos_lat: "37.679126",
  pos_lon: "126.757976",
  model_id: "HSTW-IEL-6800M-8G4SF",
  ring_id: null,
  register_time: "20201203144109",
  update_time: null,
  is_incident_notify: "Y",
  icon_nm: "",
  is_bypass: "Y",
};

async function main() {
  try {
    for (const item of DEVICES) {
      // console.log("start", item.device_id);
      let modelId = null;
      const model = MODELS.filter((m) => m.name === item.model_id);
      if (model.length > 0) {
        modelId = model[0].id;
      } else {
        console.log("start", item.device_id);
        console.log("model not found", item.model_id);
      }

      await axios({
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMTZmOTRmZi0wMTRhLTRjMDYtYTE4OC1mNTgzZmUwOTM1NWEiLCJzdWIiOiJhZG1pbiIsInBlcm1pc3Npb25zIjoiV1JJVEUsUkVBRCIsImV4cCI6MTY3Mzk5NzU2OH0.sLVA_CE2V-NC76RcvHJl4Ml1ncaN4Gvw1vJBT05bodg",
        },
        method: "PUT",
        url: "http://1.223.227.163:5000" + "/devices",
        data: {
          name: item.device_id,
          ip: item.ip,
          mac: "ff:ff:ff:ff:ff:ff",
          modelId,
          description: item.comments,
          sort: item.disp_priority ? parseInt(item.disp_priority) : 1,
          coordinate: {
            latitude: parseFloat(item.pos_lat),
            longitude: parseFloat(item.pos_lon),
          },
          useAlert: item.is_incident_notify === "Y" ? true : false,
          power: item.is_dual_power === "Y" ? "DUAL" : "SINGLE",
          useBypass: item.is_bypass === "Y" ? true : false,
        },
      });
    }
  } catch (e) {
    console.log(e.response.data);
  }
}

main();
