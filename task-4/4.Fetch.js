const fetch = require("node-fetch");

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  }).then((response) => {
    return response.json();
  });

  let dataName = data.map((item) => item.name);

  console.log(dataName);
}

getData();
