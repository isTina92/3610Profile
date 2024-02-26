// add canvas
const canv = document.getElementById("cartoonCanvas");
const context = canv.getContext("2d");
canv.style.backgroundColor = "#45505f"; // set the background to blue
canv.style.border = "2px solid black"; // set a black border with a width of 2px


// set the canva at center
canv.style.margin = "auto";
canv.style.display = "block";

// moon
context.beginPath();
context.fillStyle = "#e5e5e5";  // gray white
context.arc(700, 75, 50, 0, Math.PI * 2);
context.closePath();
context.fill(); 

//bird wing left    (1)
context.beginPath();
context.moveTo(250, 100);
context.fillStyle = "black";
// context.quadraticCurveTo(247, 90, 260, 110);
context.bezierCurveTo(248, 90, 240, 90, 260, 110);
// context.lineTo(270,120);
context.closePath();
context.stroke();
// bird wing right  (1)
context.beginPath();
context.moveTo(260, 100);
context.bezierCurveTo(262, 80, 267, 80, 260, 110);
context.closePath();
context.fill();
context.stroke();

// cloud_1
context.beginPath();
context.fillStyle = "#5f6e7e";  // light gray
context.arc(330, 150, 25, 0, Math.PI * 2);
context.arc(360, 140, 35, 0, Math.PI * 2);
context.arc(390, 140, 25, 0, Math.PI * 2);
context.arc(400, 160, 25, 0, Math.PI * 2);
context.arc(370, 160, 35, 0, Math.PI * 2);
context.arc(340, 160, 25, 0, Math.PI * 2);
context.closePath();
context.fill();

// cloud_2
context.beginPath();
context.fillStyle = "#5f6e7e";
context.arc(500, 200, 30, 0, Math.PI * 2);
context.arc(530, 190, 40, 0, Math.PI * 2);
context.arc(530, 190, 30, 0, Math.PI * 2);
context.arc(580, 200, 30, 0, Math.PI * 2);
context.arc(550, 200, 40, 0, Math.PI * 2);
context.arc(520, 200, 30, 0, Math.PI * 2);
context.closePath();
context.fill();

// grass left
context.beginPath();
context.fillStyle = "#1f9d1f";  // green
context.arc(40, 250, 70, 0, Math.PI * 2);
context.arc(130, 285, 70, 0, Math.PI * 2);
context.arc(220, 320, 70, 0, Math.PI * 2);
context.arc(300, 355, 70, 0, Math.PI * 2);
context.fillRect(0, 305, 300, 100);
context.closePath();
context.fill();

// grass right
context.beginPath();
context.fillStyle = "#1f9d1f";  // green
context.arc(860, 250, 70, 0, Math.PI * 2);
context.arc(770, 285, 70, 0, Math.PI * 2);
context.arc(680, 320, 70, 0, Math.PI * 2);
context.arc(590, 355, 70, 0, Math.PI * 2);
context.fillRect(645, 305, 300, 100);
context.closePath();
context.fill();

// ground
context.beginPath();
context.fillStyle = "#654a25";  // light brown
context.fillRect(0, 400, 900, 200);
context.closePath();

// river
context.beginPath();
context.fillStyle = "#49a9fb";
context.moveTo(0, 400);
context.lineTo(0, 450);
context.lineTo(50, 500);
context.lineTo(150,530);
context.lineTo(250, 600);
context.lineTo(450, 600);
context.lineTo(400, 530);
context.lineTo(350, 500);
context.lineTo(200, 400);

context.closePath();
context.stroke();
context.fill();

// house body
context.beginPath();
context.fillStyle = "#9a4948";
context.fillRect(630, 340, 120, 60);
context.strokeStyle = "black";
context.strokeRect(630, 340, 120, 60);
context.closePath();
context.stroke();

//house body detail
context.beginPath();
context.moveTo(690, 340);
context.lineTo(690, 400);
context.lineWidth = 0.5;
context.closePath();
context.stroke();

//door
context.beginPath();
context.fillStyle = "#5f2725";
context.strokeStyle = "black";
context.fillRect(650, 370, 18, 30);
context.strokeRect(650, 370, 18, 30);
context.closePath();

// chimney
context.beginPath();
context.fillStyle = "#5f2725";
context.strokeStyle = "black";
context.fillRect(650, 280, 18, 30);
context.strokeRect(650, 280, 18, 30);
context.closePath();

// housetop_Triangle_Middle
context.beginPath();
context.fillStyle = "#5f2725";
context.fillRect(650, 300, 75, 40);
context.closePath();

// housetop_Triangle_Left
context.beginPath();
context.fillStyle = "#9a4948";
context.moveTo(650, 300); 
context.lineTo(610, 340);
context.lineTo(690, 340); 
context.closePath(); 
context.fill();
context.stroke();

// housetop_Triangle_Right
context.beginPath();
context.fillStyle = "#5f2725"; 
context.moveTo(724, 300); 
context.lineTo(700, 340); 
context.lineTo(750, 340); 
context.closePath(); 
context.fill(); 

//萤火虫
for(let i  = 0; i < 25 ; i++){
    context.beginPath();
    context.fillStyle = "#ADFF2F";
    let ranX = Math.floor(Math.random() * 901); // random location of x value
    let ranY = Math.floor(Math.random() * 601); // random location of y value
    context.arc(ranX, ranY, 3, 0, Math.PI * 2);
    context.closePath();
    context.fill(); 
}

context.fillStyle = "rgba(0, 0, 0, 0.5)";
context.font = '30px Arial';
context.fillText('No One Can Bother You By Living Here', 200, 600);