const axios = require("axios");
const { API } = require("./config");

async function main() {
  try {
    const { data } = await axios({
      url: API + "/users/auth",
      method: "POST",
      data: {
        username: "admin",
        password: "admin1234",
      },
    });

    console.log(data.accessToken);
  } catch (e) {
    console.log(e?.response);
  }
}

main();
