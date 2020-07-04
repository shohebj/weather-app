// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });

// const { response } = require("express");

// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const ms1 = document.querySelector("#ms1");
const ms2 = document.querySelector("#ms2");

// ms1.textContent = "";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  ms1.textContent = "Loading..";
  ms2.textContent = "";

  fetch("http://localhost:3000/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          ms1.textContent = data.error;
        } else {
          ms1.textContent = data.forecast;
          ms2.textContent =
            "It is currently " + data.temperature + " degress out";
        }
      });
    }
  );

  console.log(location);
});
