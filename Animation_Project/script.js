let img = new Image(); 
img.src = "images/spritesheet.png";

img.onload = function() { 
    init(); 
};

const canv = document.querySelector("canvas");
const context = canv.getContext("2d");

const x_Cut = 65;   // cutting area starting point  x-axis
const width = 47;   // img width
const height = 59;  // img heigh
let y = 0;  // y position
let x = 70;  // x position
const totalFrames = 4; // total img 
let currentFrame = 0; // current img
let frameCount = 0; 
const frameRate = 8; // frame rate, the number of frames played per second

function init() {
    y_count = 37;   // step count for y-axis
    x_count = 60;   // step count for x-axis
    window.requestAnimationFrame(step1);
}

// top to botton
function step1() {
    frameCount++;
    if (frameCount < frameRate) {
        window.requestAnimationFrame(step1);
        return;
    }
    frameCount = 0;
    context.clearRect(0, 0, canv.width, canv.height);
    context.drawImage(img, x_Cut * currentFrame, 0, width, height, 70, y, 50, 50);
    currentFrame++;
    y += 10;
    if (currentFrame >= totalFrames) {
        currentFrame = 0; // if all img are finish to display, start from the beginning img
    }
    y_count--;
    if(y_count == 0){
        window.requestAnimationFrame(step2); // next movement
        return;
    }
    window.requestAnimationFrame(step1); // same movement but do again
}

// botton to right
function step2() {
    frameCount++;
    if (frameCount < frameRate) {
        window.requestAnimationFrame(step2);
        return;
    }
    frameCount = 0;
    context.clearRect(0, 0, canv.width, canv.height);
    context.drawImage(img, x_Cut * currentFrame, 140, width, height, x, 370, 50, 50);
    currentFrame++;
    x += 10;
    if (currentFrame >= totalFrames) {
        currentFrame = 0;
    }
    x_count--;
    if(x_count == 0){
        window.requestAnimationFrame(step3);
        return;
    }
    window.requestAnimationFrame(step2);
}

// botton to right
function step3() {
    frameCount++;
    if (frameCount < frameRate) {
        window.requestAnimationFrame(step3);
        return;
    }
    frameCount = 0;
    context.clearRect(0, 0, canv.width, canv.height);
    context.drawImage(img, x_Cut * currentFrame, 200, width, height, 670, y, 50, 50);
    currentFrame++;
    y -= 10;
    if (currentFrame >= totalFrames) {
        currentFrame = 0;
    }
    y_count++;
    if(y_count == 37){
        window.requestAnimationFrame(step4);
        return;
    }
    window.requestAnimationFrame(step3);
}
// top right to left(initial)
function step4() {
    frameCount++;
    if (frameCount < frameRate) {
        window.requestAnimationFrame(step4);
        return;
    }
    frameCount = 0;
    context.clearRect(0, 0, canv.width, canv.height);
    context.drawImage(img, x_Cut * currentFrame, 75, width, height, x, 5, 50, 50);
    currentFrame++;
    x -= 10;
    if (currentFrame >= totalFrames) {
        currentFrame = 0;
    }
    x_count++;
    if(x_count == 60){
        window.requestAnimationFrame(step1);
        return;
    }
    window.requestAnimationFrame(step4);
}