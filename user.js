const slunce = document.getElementById("slunce");
const zeme = document.getElementById("zeme");
const zemeStyl = window.getComputedStyle(zeme);
const slunceStyl = window.getComputedStyle(slunce);

let id = setInterval(otaceni, 5);
let x = parseInt(zemeStyl.getPropertyValue("left").slice(0, -2));
let y = parseInt(zemeStyl.getPropertyValue("top").slice(0, -2));
let bodOtaceniX = parseInt(slunceStyl.getPropertyValue("left").slice(0, -2));
let bodOtaceniY = parseInt(slunceStyl.getPropertyValue("top").slice(0, -2)) - 200;
let uhel = 0;

zeme.style.left = x + "px";
zeme.style.top = y + "px";

function otaceni() {
    var nx = (Math.cos(uhel) * (x - bodOtaceniX)) - (Math.sin(uhel) * (y - bodOtaceniY)) + bodOtaceniX;
    var ny = (Math.cos(uhel) * (y - bodOtaceniY)) + (Math.sin(uhel) * (x - bodOtaceniX)) + bodOtaceniY;
    zeme.style.left = nx + "px";
    zeme.style.top = ny + "px";
    uhel += 0.01;
}
