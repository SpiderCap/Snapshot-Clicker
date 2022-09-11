function preload() {
}

function setup()
{
    canvas = createCanvas(700, 540);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 140, 140, 400, 280);
    fill(255, 0, 0);
    circle(75, 75, 100);
    fill(255, 0, 0);
    circle(625, 75, 100);
    fill(255, 0, 0);
    circle(75, 475, 100);
    fill(255, 0, 0);
    circle(625, 475, 100);
    fill(0, 100, 0);
    rect(125, 65, 450, 20);
    fill(0, 100, 0);
    rect(125, 465, 450, 20);
    fill(0, 100, 0);
    rect(65, 125, 20, 300);
    fill(0, 100, 0);
    rect(615, 125, 20, 300);
}

function take_snapshot()
{
    save('student_name.png');
}