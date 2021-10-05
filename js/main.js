// -------------------- SCREEN CHANGE -------------------- //

const screenChange = (nextScreen) => {

    let screenSelect = ["screen1", "screen2", "screen3", "screen4"];

    screenSelect = screenSelect.filter(i => !nextScreen.includes(i));

    document.getElementById(nextScreen).style.display = "block";

    for (let position of screenSelect) {

        document.getElementById(position).style.display = "none";
    }
}


// -------------------- CARS AND ATTRIBUTES -------------------- //


class dragCars {
    constructor(name, speed, acceleration, grip) {
        this.name = name;
        this.speed = speed;
        this.acceleration = acceleration;
        this.grip = grip;
        this.distance = 0;
    }
}
/*
getDistance(meters) {
    this.distance += meters;
}

let car1 = new dragCar("drag1", 180, 60, 10);
let car2 = new dragCar("drag2", 130, 80, 40);
let car3 = new dragCar("drag3", 150, 70, 30);
let car4 = new dragCar("drag4", 200, 30, 20);

let players = [];

// -- TRADUCTOR -- //

let traductor = {
"1": car1,
"2": car2,
"3": car3,
"4": car4
}
*/


let arrayDeCoches = ["", ""];
var index = 0;


function selectCar(car) {
    savedCars[index] = car;
    document.getElementById("drag" + index);
    index++;
    raceIndex();
}

var distanceCar0 = 0;
var distanceCar1 = 0;
var distance = 500;




function raceIndex() {
    var Interval = window.setInterval(function () {
        distanceCar0 += Math.random() * (50 - 100) + 50;
        distanceCar1 += Math.random() * (50 - 100) + 50;
        clearInterval(Interval);
        if (distanceCar0 < distanceCar1) {
            document.getElementById("X").src = savedCars[1];
        }
        else {
            document.getElementById("X").src = savedCars[0];
        }
        document.getElementById("X").innerHTML = "Distance: " + distanceCar0.toFixed(2);
    document.getElementById("X").innerHTML = "Distance: " + distanceCar1.toFixed(2);
}, 1000);
}