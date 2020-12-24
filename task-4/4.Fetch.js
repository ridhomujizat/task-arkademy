const fetch = require("node-fetch");

async function getData() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.map((e) => {
        console.log(e.name);
      });
    });
}

getData();
