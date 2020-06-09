let numberOfRows;
let numberOfColumns;

let xStep;
let yStep;
let positions = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    numberOfColumns = 24;
    numberOfRows = 20;

    xStep = width / numberOfColumns;
    yStep = height / numberOfRows;

    for (let x = 0; x < width; x += xStep) {
        for (let y = 0; y < height; y += yStep) {
            let p = createVector(x, y);
            positions.push(p);

        }
    }
}

function draw() {
    fill(250, 100, 100);
    for (let x = 0; x < positions.length; x++) {
        text(x, positions[x].x, positions[x].y);
    }

    rect(positions[292].x, positions[292].y, 120, 120)

}


// let input, button;
// let gridNumber;

// function setup() {
//     createCanvas(windowWidth, windowHeight);

//     input = createInput();
//     input.position(1250, 25);

//     button = createButton('submit');
//     button.position(input.x + input.width, 25);
//     button.mousePressed(greet);


//     textAlign(CENTER);

// }

// function draw() {
//     for (let i = 0; i < height; i += height / 8) {
//         for (let j = 0; j < width; j += 100) {
//             line(0, i, width, i);
//             line(j, 0, j, height);
//             text(i + "/" + j, i, j);
//         }
//     }

//     ellipse() =



//         console.log(gridNumber);

// }

// function greet() {
//     const name = input.value();
//     input.value('');
//     fill(0);
//     text(name, width / 2, height / 2);
// }


// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }