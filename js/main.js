
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
    return Math.random() * (max - min) + min;
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
    raceAlgorithm() {
        let luck = random(this.Intuition, 3);   //suerte, interacciona con el grip
        let reflex = random(0.5, 1);              //reflejos, interacciona con la aceleración
        let advance = Math.floor(this.Speed + (reflex * this.Acceleration) + this.Grip * luck);
        this.Distance += advance;
    }
}


//---intstanciar coches
let car1 = new dragCar("Benny", 1, 180, 60, 17, 1);
let car2 = new dragCar("Donald", 2, 130, 80, 35, 1);
let car3 = new dragCar("Mercury", 3, 150, 70, 29, 1);
let car4 = new dragCar("Stag", 4, 200, 30, 20, 1);

//---traductor
let allRacers = {
    "1": car1,
    "2": car2,
    "3": car3,
    "4": car4
}

const FINISHLINE = 5000;

/////////////////////////////////////

// const selectCar = (car) => {

//     let carImg = "carImg" + car;
//     console.log(carImg);
//     let selectedCar = document.getElementById(car);
// }


let race = {
    players: [],

    selectPlayer1(idRacer) {
        this.players.push(allRacers[idRacer]);
    },

    selectPlayer2(idRacer) {
        this.players.push(allRacers[idRacer]);
    }
}

// let asdf = [];

// const selectCar = (car) => {
//     // document.getElementById("carImg" + car) =
    
//     asdf.push(allRacers[car]);
// }

// console.log(asdf);

const selectCar = (car) => {
    // document.getElementById("carImg" + car) =
    
    race.players.push(allRacers[car]);
}

console.log(race.players);
// race.selectPlayer1("1");
// race.selectPlayer2("2");




// if (race.players.length = 1) {
//     // console.log("Select player 2");

// } else {

//     // console.log("Select player 1");

// }





const result = () => {
    race.players[0].Name;
    console.log(race.players[0].Name);
    race.players[1].Name;
    console.log(race.players[1].Name);

    do {
        car1.raceAlgorithm();
        car2.raceAlgorithm();
        car3.raceAlgorithm();
        car4.raceAlgorithm();

        console.log("player 1: " + race.players[0].Distance);
        console.log("player 2: " + race.players[1].Distance);
    }

    while (race.players[0].Distance < FINISHLINE && race.players[1].Distance < FINISHLINE)

    if (race.players[0].Distance > race.players[1].Distance) {
        console.log(race.players[0].Name + " is the winner!");
    } else {
        console.log(race.players[1].Name + " is the winner!");
    }
}

const startRace = () => {
    result();
}

































// let player1 = [];
// let player2 = [];

// let race = {
//     p1: [],
//     p2: [],
//     p1Win: 0,
//     p2Win: 0,
//     p2Choices: [],
//     count: 0,
//     count_race: 0,
//     race_info: "",
//     arg1: "",
//     arg2: "",

//     selectPlayer1(idRacer) {

//         this.p1.push(allRacers[idRacer]);

// if (this.p1 <2) {
//     document.getElementById(idRacer).className = "carSelectGray";
//     document.getElementById(idRacer).onclick = "";

// }

