// date
let today = new Date();
let month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(today);
let date = today.getDate();

let weekday = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
let todayWeekday = weekday[today.getDay()];
const day = date + " " + month + " • " + todayWeekday;

const dateHeader = document.querySelector("li");
dateHeader.innerText = day;
