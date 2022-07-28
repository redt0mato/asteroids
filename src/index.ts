const canvas = document.getElementsByTagName('canvas')[0];

var ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fill();
ctx.closePath();