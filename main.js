noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    background('gray');

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('modle loaded!')
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background('grey');
    document.getElementById('circle_side').innerHTML='width and height of the text will be = '+difference+'px';
    fill ('pink');
    stroke('pink');

    textSize(difference);
    text('yaaaay',noseX,noseY);
}