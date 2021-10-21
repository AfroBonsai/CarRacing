class Fighter {
    constructor(name, id, fuerza, defensa, suerte, velocidad) {
        this.Vida = 300;
        this.Id = id;
        this.Name = name;
        this.Fuerza = fuerza;
        this.Defensa = defensa;
        this.Suerte = suerte;
        this.Velocidad = velocidad;
    }
    attack(enemigo) {

        let luck = func.random(1, enemigo.Suerte); //suerte defensa
        let handic = func.random(1, 5); //handicap ataque
        let hit = (this.Fuerza - handic) - (enemigo.Defensa + luck);
        let speed = func.random(1, 100); //handicap de velocidad

        if (speed < enemigo.Velocidad) {
            hit -= func.random(1, 5);
        }
        enemigo.Vida -= hit;
    }
}

//declaration of thy 9 mighty fighters
let f1 = new Fighter('ANDY', '1', 40, 10, 7, 30);
let f2 = new Fighter('BILLY', '2', 42, 7, 8, 25);
let f3 = new Fighter('GEESE', '3', 50, 1, 8, 20);
let f4 = new Fighter('JOE', '4', 40, 9, 10, 33);
let f5 = new Fighter('KIM', '5', 38, 15, 6, 40);
let f6 = new Fighter('MAI', '6', 42, 6, 5, 21);
let f7 = new Fighter('CLAY', '7', 48, 5, 5, 10);
let f8 = new Fighter('TERRY', '8', 40, 9, 9, 41);
let f9 = new Fighter('TUNG', '9', 35, 14, 7, 45);

//traductor
let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9
}

//juego
let game = {
    turno: 0,
    winner: "",
    victoriap2: "",
    victoriap1: "",
    iniciativa: "",
    p1: "",
    p2: "",

    resetFight() {
        this.turno = 0;
        this.iniciativa = "";
        this.p1 = "";
        this.p2 = "";
    },
    clearFight() {
        this.resetFight();

        partida.cont_fight++;
        this.p1.Vida = 300;
        this.p2.Vida = 300;

        partida.init5();
    },
    turnoFight(arglu1, arglu2) {

        iniciativa = func.random(1, 3);

        this.turno++;
        this.p1 = arglu1;
        this.p2 = arglu2;

        //fighter1 status and actions
        if (this.p1.Vida > 0) {
            if (iniciativa == 1) {
                this.victoriap1 = (this.p2.Vida <= 0) ? "v" : "m";
                if (this.victoriap1 == "v") {
                    //gana el player1
                } else {
                    this.p1.attack(this.p2);

                    if(this.p2.Vida < 0){
                        this.p2.Vida = 0;
                    }

                    let lbact = document.getElementById("glad2v");
                    lbact.innerHTML = `PLAYER 2 LIFE : ${this.p2.Vida}`;
                }
            }
        } else {
            //gana el player2
            document.getElementById("fist").onclick = "";
            this.winner = `${this.p2.Name} gana ${this.p1.Name} KO`;


            let koknow2 = document.getElementById("anuncioko");
            koknow2.innerHTML = `${this.p2.Name} WINS... ${this.p1.Name} IS KO`;

            partida.team2win++;

            resolveIn(1500).then(delay => {
                //console.log("gana el equipo 2");
                this.clearFight();
            });
        }

        //fighter2 status and actions
        if (this.p2.Vida > 0) {
            if (iniciativa == 2) {
                this.victoriap2 = (this.p1.Vida <= 0) ? "v" : "m";
                if (this.victoriap2 == "v") {
                    //gana el player2
                } else {

                    this.p2.attack(this.p1);

                    if(this.p1.Vida < 0){
                        this.p1.Vida = 0;
                    }
                    let lbact = document.getElementById("glad1v");
                    lbact.innerHTML = `PLAYER 1 LIFE : ${this.p1.Vida}`;
                }
            }
        } else {
            //gana el player1
            this.winner = `${this.p1.Name} GANA ${this.p2.Name} KO`;
            document.getElementById("fist").onclick = "";

            let koknow = document.getElementById("anuncioko");

            koknow.innerHTML = `${this.p1.Name} WINS... ${this.p2.Name} IS KO`;

            partida.team1win++;

            resolveIn(2000).then(delay => {
                //console.log("gana el equipo1");
                this.clearFight();
            });
        }
    }
}