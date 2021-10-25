
// Author: George Zamfir
// Version 1.0



// -------------------- SCREEN CHANGE -------------------- //

const screenChange = (nextScreen) => {

    let screenSelect = ["screen1", "screen2", "screen3", "screen4"];

    screenSelect = screenSelect.filter(i => !nextScreen.includes(i));

    document.getElementById(nextScreen).style.display = "block";

    for (let position of screenSelect) {

        document.getElementById(position).style.display = "none";
    }
}


// -------------------- PLAYERS AND RACE -------------------- //

//---función randomizar

const random = (min, max) => {
        Math.floor(Math.random() * (max - min) + min);
    }


//---constructor de los coches
class dragCar {
    constructor(name, id, speed, acceleration, grip, intuition) {
        this.Name = name;
        this.Id = id;
        this.Speed = speed;
        this.Acceleration = acceleration;
        this.Grip = grip;
        this.Intuition = intuition;
        this.Distance = 0;
    }

    //---alogoritmo para avanzar el coche
    race() {
        let luck = random(this.Intuition, 1.6);   //suerte, interacciona con el grip
        let reflex = random(0.8, 1);              //reflejos, interacciona con la aceleración
        let advance = this.Speed + (reflex * this.Acceleration) + this.Grip * luck;
        this.Distance += advance;
    }
}

//---intstanciar coches
let car1 = new dragCar("Benny", 180, 60, 10, 1);
let car2 = new dragCar("Donald", 130, 80, 40, 1);
let car3 = new dragCar("Mercury", 150, 70, 30, 1);
let car4 = new dragCar("Stag", 200, 30, 20, 1);

//---traductor
let allRacers = {
    "1": car1,
    "2": car2,
    "3": car3,
    "4": car4
}

if (this.distance < 5000) {
    console.log(race(1));
}


// let player1 = [];
// let player2 = [];

let race = {
    p1: [],
    p2: [],
    p1Win: 0,
    p2Win: 0,
    p2Choices: [],
    count: 0,
    count_race: 0,
    race_info: "",
    arg1: "",
    arg2: "",

    selectPlayer1(idRacer) {

        this.p1.push(allRacers[idRacer]);

if (this.p1 <2) {
    document.getElementById(idRacer).className = "carSelectGray";
    document.getElementById(idRacer).onclick = "";

}

    }





}

