var canvas = document.querySelector('canvas')
;
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;

 var c = canvas.getContext('2d');

//  c.fillStyle = 'rgba(255,0,0,0.5)';
//  c.fillRect(100,100,100,100);
//  c.fillRect(300,300,100,100);
//  c.fillRect(300,300,100,100);
//  //line
//  c.beginPath();
//  c.moveTo(50,300);
//  c.lineTo(300,100);
//  c.lineTo(400,300);
//  c.strokeStyle ="#fa34a3";
//  c.stroke(); 
var mouse = {
  x: undefined,
  y: undefined
}
var maxradius = 40;
var minradius = 2;
var colorArray = [
  '#ff6347',
  '#ffD700',
  '#0000FF',
  '#BC8F8F',
  '#800000',
];
window.addEventListener('mousemove' ,
function(event)
{
  mouse.x = event.x;
  mouse.y = event.y
})
window.addEventListener('resize', function(){
  canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
});
function Circle(x, y,dx,dy,radius){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minradius = radius;  

  this.draw = function() {
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
    c.fillstyle = 'black';
    c.fill();
  }
  this.update = function(){
    if(this.x + this.radius > innerWidth || this.x - radius < 0){
      this.dx = -this.dx;
  }
if(this.y + this.radius > innerHeight || this.y - radius < 0){
      this.dy = -this.dy;
  }
  this.x += this.dx;   
  this.y += this.dy;
  //interactivity
  if((mouse.x - this.x)< 100 && (mouse.x - this.x)> -100 && (mouse.y - this.y)< 100 && (mouse.y - this.y) > -100){
    if(this.radius < maxradius){
    this.radius += 1.5;
  }
}
  else if(this.radius > this.minradius){
    this.radius -= 1;
  }
  this.draw();
}
}
var circleArray = [];
for(var i=0;i<2500;i++){
var x = Math.random() * (innerWidth - radius * 2) + radius;
var y = Math.random() * (innerHeight - radius * 2) + radius;
var dx = (Math.random() - 0.5) * 10;
var dy = (Math.random() - 0.5) * 10;
var radius = Math.random() * 3 + 1;
circleArray.push(new Circle(x, y, dx, dy,radius));
}

function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0,0,innerWidth,innerHeight);
      for(var i= 0;i < circleArray.length;i++){
        circleArray[i].update(); 
      }   
  }
animate();

