const axios = require("axios");
const { API, TOKEN } = require("./config");
const GROUPS = require("./GROUPS.json");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log("start");
  try {
    for (const item of GROUPS) {
      console.log("start", item.group_id);

      await axios({
        url: API + "/groups",
        method: "PUT",
        headers: {
          Authorization: "Bearer " + TOKEN,
        },
        data: {
          name: item.group_id,
          description: item.comments,
          sort: item.disp_priority ? parseInt(item.disp_priority) : 1,
        },
      });
    }
  } catch (e) {
    console.log(e?.response?.data?.data);
  }
}

main();
