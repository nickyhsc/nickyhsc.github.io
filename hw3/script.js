// 定義變數
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let x1 = 0, y1 = 0, dx1 = 5, dy1 = 5, r1 = 30, color1 = "#99ffcc";
let x2 = canvas.width, y2 = 0, dx2 = -5, dy2 = 5, r2 = 30, color2 = "#99ccff";
let x3 = canvas.height, y3 = 0, dx3 = 5, dy3 = 5, r3 = 30, color3 = "#ffffcc";

// 畫圓形
function drawBall(x, y, r, color)
{
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2); // arc(圓心x, 圓心y, 半徑, 起始角, 結束角)
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}


// 更新畫布
function draw()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    x1 = x1 + dx1;
    y1 = y1 + dy1;

    x2 = x2 + dx2;
    y2 = y2 + dy2;
  
    x3 = x3 + dx3;
    y3 = y3 + dy3;

    // TODO: 如果發生碰撞(畫布寬canvas.width, 畫布高canvas.height)，則改變速度(dx, dy)和顏色(color)
    if(x1<0 || x1>canvas.width) dx1 = -dx1;
    if(y1<0 || y1>canvas.height) dy1 = -dy1;
   
    if(x2<0 || x2>canvas.width)  dx2 = -dx2;
    if(y2<0 || y2>canvas.height) dy2 = -dy2;
    
    if(x1<0 || x1>canvas.width) dx3 = -dx3;
    if(y1<0 || y1>canvas.height) dy3 = -dy3;
  
    if((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) < (r1+r2)*(r1+r2))
    {
      [dx1, dy1, dx2, dy2] = [dx2, dy2, dx1, dy1];
    }
    if((x2-x3)*(x2-x3) + (y2-y3)*(y2-y3) < (r2+r3)*(r2+r3))
    {
      [dx2, dy2, dx3, dy3] = [dx3, dy3, dx2, dy2];
    }
    if((x1-x3)*(x1-x3) + (y1-y3)*(y1-y3) < (r1+r3)*(r1+r3))
    {
      [dx1, dy1, dx3, dy3] = [dx3, dy3, dx1, dy1];
    }
  
    drawBall(x1, y1, r1, color1);
    drawBall(x2, y2, r2, color2);
    drawBall(x3, y3, r3, color3);
    requestAnimationFrame(draw);
}
draw();