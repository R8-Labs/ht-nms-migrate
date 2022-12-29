const axios = require("axios");
const { API, TOKEN } = require("./config");
const RINGS = require("./RINGS.json");

// {
//   ring_id: "39호선_데이터링",
//   group_id: "39호선",
//   zoom_level: 13,
//   icon_size: "1",
//   comments: "",
//   reg_id: "admin",
//   reg_dtm: "2020-12-03 11:22:02",
//   mod_id: "admin",
//   mod_dtm: "2021-10-06 11:50:37",
//   seq: 46,
//   parent_ring_id: "",
//   disp_priority: 46,
// },

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("start");
  try {
    const { data } = await axios({
      url: API + "/groups",
      params: { size: 10000 },
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });

    const GROUPLIST = data.data;

    for (const item of RINGS) {
      console.log("start", item.ring_id);
      let grId = null;
      const group = GROUPLIST.filter((gr) => gr.name === item.group_id);

      if (group.length !== 0) {
        grId = group[0].id;
      } else {
        console.log("group not found", item.group_id);
      }

      await axios({
        method: "PUT",
        url: API + "/rings",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
        data: {
          name: item.ring_id,
          description: item.comments,
          sort: item.disp_priority ? parseInt(item.disp_priority) : 1,
          groupId: grId,
          coordinate: {
            latitude: 37.65910265630748,
            longitude: 126.83341296720019,
          },
          scale: item.zoom_level - 4,
          type: "ONLINE",
        },
      });
    }
  } catch (e) {
    console.log(e?.response?.data?.data);
  }
}

main();
