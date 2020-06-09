let input, button;
let gridNumber;

function setup() {
    createCanvas(windowWidth, windowHeight);

    input = createInput();
    input.position(1250, 25);

    button = createButton('submit');
    button.position(input.x + input.width, 25);
    button.mousePressed(greet);


    textAlign(CENTER);

}

function draw() {
    for (let i = 0; i < height; i += height / 8) {
        for (let j = 0; j < width; j += 100) {
            line(0, i, width, i);
            line(j, 0, j, height);
            text(i + "/" + j, i, j);
        }
    }

    ellipse() =



        console.log(gridNumber);

}

function greet() {
    const name = input.value();
    input.value('');
    fill(0);
    text(name, width / 2, height / 2);
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}