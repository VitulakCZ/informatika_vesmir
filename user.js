const slunce = document.getElementById("slunce");
const zeme = document.getElementById("zeme");
const zemeStyl = window.getComputedStyle(zeme);
const slunceStyl = window.getComputedStyle(slunce);

let id = setInterval(otaceni, 5);
let x = parseInt(zemeStyl.getPropertyValue("left"));
let y = parseInt(zemeStyl.getPropertyValue("top"));
let bodOtaceniX = parseInt(slunceStyl.getPropertyValue("left"));
let bodOtaceniY = parseInt(slunceStyl.getPropertyValue("top")) - 200;
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
