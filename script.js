
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const CANVAS_HEIGHT = canvas.heigth = 600;
const CANVAS_WIDTH = canvas.width = 2000;

const stickImage = new Image();

stickImage.src = "stickSprite.jpg";

const SPRITE_WIDTH = 125;
const SPRITE_HEIGHT = 149;

let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrames = 10;
let posx = 0;
let posy = 0;

console.log(ctx);

function animate() {

    ctx.clearRect( 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT );

    ctx.drawImage(stickImage , frameX * SPRITE_WIDTH , frameY * SPRITE_HEIGHT,  SPRITE_WIDTH,  SPRITE_HEIGHT ,posx ,posy ,SPRITE_WIDTH, SPRITE_HEIGHT);

    if (gameFrame % staggerFrames == 0) {
        if (frameX < 11){
            frameX++
        } else frameX = 0;
    }

    gameFrame++;
    requestAnimationFrame(animate);
};


//animate();

