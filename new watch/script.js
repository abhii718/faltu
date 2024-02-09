let hr = document.querySelector("#hr");
let sc = document.querySelector("#sc");
let mn = document.querySelector("#mn");

let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;