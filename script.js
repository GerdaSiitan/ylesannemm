let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(10, 70, 100, 20);

ctx.fillStyle = 'black';
ctx.fillRect(10, 90, 100, 20);


ctx.strokeStyle = 'black';
ctx.strokeRect(11, 110, 98, 19);

ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.moveTo(200, 70);
ctx.lineTo(210, 90);
ctx.lineTo(230, 95);
ctx.lineTo(215, 110);
ctx.lineTo(220, 130);
ctx.lineTo(200, 120);
ctx.lineTo(180, 130);
ctx.lineTo(185, 110);
ctx.lineTo(170, 95);
ctx.lineTo(190, 90);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
        ctx.lineWidth=1;
        ctx.strokeStyle= 'black';
        ctx.arc(200, 200, 30, 0, Math.PI/180*360);
        ctx.stroke();

ctx.beginPath();
    ctx.moveTo(200, 200);
    ctx.lineTo(210, 160); ctx.lineTo(190, 160);
    ctx.lineTo(200, 200);
    ctx.fill();

ctx.beginPath();
    ctx.lineWidth = 19;
    ctx.strokeStyle = 'white';
    ctx.arc(200, 200, 40, 0, Math.PI/100*360);
    ctx.closePath();
    ctx.stroke();

 
