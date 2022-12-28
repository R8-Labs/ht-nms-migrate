const axios = require("axios");
const RINGS = require("./RINGS.json");
const GROUPS = [
  {
    id: "12ae7b7e-0d68-4ca1-9f35-cd8f4bc9087b",
    name: "서오릉",
    description: "",
    sort: 11,
    createdAt: "2022-12-28T01:14:07+09:00",
    modifiedAt: "2022-12-28T01:14:07+09:00",
  },
  {
    id: "2b5bba02-ab6e-4648-95b4-cbab5cdd5c61",
    name: "BRT",
    description: "",
    sort: 1,
    createdAt: "2022-12-28T01:13:54+09:00",
    modifiedAt: "2022-12-28T01:15:46+09:00",
  },
  {
    id: "2b7ddc01-7862-4050-9562-71f11c0a5054",
    name: "39호선",
    description: "",
    sort: 5,
    createdAt: "2022-12-28T01:15:01+09:00",
    modifiedAt: "2022-12-28T01:15:01+09:00",
  },
  {
    id: "4149113a-1412-47ee-8282-9e953fbac7a8",
    name: "킨텍스",
    description: "",
    sort: 11,
    createdAt: "2022-12-28T01:14:31+09:00",
    modifiedAt: "2022-12-28T01:14:31+09:00",
  },
  {
    id: "88a7b16d-0549-4838-bb4a-748257ff1768",
    name: "test",
    description: "",
    sort: 100,
    createdAt: "2022-12-28T01:15:24+09:00",
    modifiedAt: "2022-12-28T01:16:40+09:00",
  },
  {
    id: "9a153d0c-7a9d-4809-8b59-73929cb853d6",
    name: "UTIS",
    description: "",
    sort: 3,
    createdAt: "2022-12-28T01:14:00+09:00",
    modifiedAt: "2022-12-28T01:15:54+09:00",
  },
  {
    id: "b7b10d46-76a9-43f2-9528-871600dc4cc0",
    name: "삼송지구",
    description: "",
    sort: 40,
    createdAt: "2022-12-28T01:15:18+09:00",
    modifiedAt: "2022-12-28T01:16:10+09:00",
  },
  {
    id: "c6abe31f-932e-4c7b-b316-7caa77b816bd",
    name: "버스외곽",
    description: "",
    sort: 80,
    createdAt: "2022-12-28T01:15:13+09:00",
    modifiedAt: "2022-12-28T01:16:59+09:00",
  },
  {
    id: "d017598e-083e-47d3-8e07-738e7cf72e5a",
    name: "서울청이관",
    description: "",
    sort: 11,
    createdAt: "2022-12-28T01:14:20+09:00",
    modifiedAt: "2022-12-28T01:14:20+09:00",
  },
  {
    id: "db23e36c-b8af-470b-b4c9-f19dfe106b28",
    name: "제2자유로",
    description: "",
    sort: 20,
    createdAt: "2022-12-28T01:14:54+09:00",
    modifiedAt: "2022-12-28T01:15:38+09:00",
  },
  {
    id: "eee8ecbe-9326-470e-b53f-f07045788dfb",
    name: "식사지구",
    description: "",
    sort: 4,
    createdAt: "2022-12-28T01:15:07+09:00",
    modifiedAt: "2022-12-28T01:15:07+09:00",
  },
];

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
      url: "http://1.223.227.163:5000" + "/groups",
      params: { size: 10000 },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMTZmOTRmZi0wMTRhLTRjMDYtYTE4OC1mNTgzZmUwOTM1NWEiLCJzdWIiOiJhZG1pbiIsInBlcm1pc3Npb25zIjoiV1JJVEUsUkVBRCIsImV4cCI6MTY3Mzk5NzU2OH0.sLVA_CE2V-NC76RcvHJl4Ml1ncaN4Gvw1vJBT05bodg",
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
        url: "http://1.223.227.163:5000" + "/rings",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJmMTZmOTRmZi0wMTRhLTRjMDYtYTE4OC1mNTgzZmUwOTM1NWEiLCJzdWIiOiJhZG1pbiIsInBlcm1pc3Npb25zIjoiV1JJVEUsUkVBRCIsImV4cCI6MTY3Mzk5NzU2OH0.sLVA_CE2V-NC76RcvHJl4Ml1ncaN4Gvw1vJBT05bodg",
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
    console.log(e.response.data.data);
  }
}

main();
