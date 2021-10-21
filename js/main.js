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


// Constructor y atributos de cada coche

class dragCars {
    constructor(name, speed, acceleration, grip) {
        this.name = name;
        this.speed = speed;
        this.acceleration = acceleration;
        this.grip = grip;
        this.distance = 0;
        this.roundsWon = 0;
    }

}

let car1 = new dragCar("Benny", 180, 60, 10);
let car2 = new dragCar("Donald", 130, 80, 40);
let car3 = new dragCar("Mercury", 150, 70, 30);
let car4 = new dragCar("Stag", 200, 30, 20);

const FINISH = 5000;

let player1 = "";
let player2 = "";


let winner = document.getElementById("winner");
let champion = document.getElementById("champion");

// -- TRADUCTOR -- //

let traductor = {
    "1": car1,
    "2": car2,
    "3": car3,
    "4": car4
}

const selectCar = (car) => {




    let btn = "drag" + car;
    let cocheElegido = document.getElementById(car);
    const bloqCoche = () => {

        cocheElegido.classList.add("greyscale");
        document.getElementById(btn).style.display = 'none';
    }
    const desbloqCoche = () => {

        cocheElegido.classList.remove("greyscale");
        document.getElementById(btn).style.display = 'block';
    }

    if (coche1 != "") {

        coche2 = traductor[car];
        console.log("el coche2 es", coche2);
        bloqCoche();

        setTimeout(() => {

            capas("3");
            desbloqCoche();
            jugadores();

        }, 1000);

    } else {

        coche1 = traductor[car];
        console.log("el coche1 es", coche1);
        bloqCoche();

        setTimeout(() => {

            desbloqCoche();

        }, 10000);

    }

}