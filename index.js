const heroes = [{
    id: 1,
    img: './assets/batman.png',
    name: 'Batman'
},
{
    id: 2,
    img: './assets/daredevil.png',
    name: 'Daredevil'
},
{
    id: 3,
    img: './assets/flash.png',
    name: 'Flash'
},
{
    id: 4,

    img: './assets/woman.png',
    name: 'Woman'
}, {
    id: 5,
    img: './assets/hellboy.png',
    name: 'Hellboy'
}, {
    id: 6,
    img: './assets/wonder.png',
    name: 'Wonder Woman'
}, {
    id: 7,
    img: './assets/batman.png',
    name: 'Batman'
},
{
    id: 8,
    img: './assets/daredevil.png',
    name: 'Daredevil'
},
{
    id: 9,
    img: './assets/flash.png',
    name: 'Flash'
},
{
    id: 10,
    img: './assets/woman.png',
    name: 'Woman'
}, {
    id: 11,
    img: './assets/hellboy.png',
    name: 'Hellboy'
}, {
    id: 12,
    img: './assets/wonder.png',
    name: 'Wonder Woman'
}
];

let card1 = {};
let card2 = {};
let counter = 0;
let movements = 0;
let interval = undefined;
let okCounter = 0;

function onLoad() {
    this.generateGame(heroes);

    document.getElementById("new-game").addEventListener("click", () => this.generateGame(heroes));
}

function generateGame(heroes) {
    let htmlContent = '';
    counter = 0;
    movements = 0;
    okCounter = 0;
    clearInterval(interval);
    clearMovements();
    
    heroes = Game.shuffle(heroes);

    heroes.map((heroe) => {
        htmlContent += Game.getHtmlContent(heroe);
    });

    Game.updateContent(htmlContent);

    this.hideHeroes();

    this.handleClick();

    this.startTimer();
}

function hideHeroes() {
    document.querySelectorAll('.card-img-top')
        .forEach((heroe) => {
            heroe.src = "./assets/default.png"
        });
}

function hideHeroe(id) {
    document.getElementById(`${id}`).src = "./assets/default.png";
}

function handleClick() {
    document.querySelectorAll('.card-img-top')
        .forEach((heroe) => {
            heroe.addEventListener('click', (event) => {
                if (card1.id && card2.id || (card1.id === +event.target.id || card2.id === +event.target.id)
                    || event.target.src.indexOf("default") === -1) {
                    return;
                }
            
                this.incrmentMovements();

                const h = heroes.find(heroe => heroe.id === +event.target.id)
                event.target.src = h.img;

                if (!card1.id) {
                    card1 = {
                        id: h.id,
                        name: h.name
                    };
                } else {
                    card2 = {
                        id: h.id,
                        name: h.name
                    };
                }

                if (card1.id && card2.id) {
                    if (card1.name === card2.name) {
                        card1 = {};
                        card2 = {};
                        okCounter += 1;

                        if (okCounter === 6) {
                            this.stopGame();
                        }
                    } else if (card2.name) {
                        setTimeout(() => {
                            this.hideHeroe(card1.id);
                            this.hideHeroe(card2.id);
                            card1 = {};
                            card2 = {};
                        }, 500);
                    }
                }
            })
        });
}

function startTimer() {
    interval = setInterval(() => {
        document.getElementById('timer').innerHTML = counter;

        counter++;
    }, 1000);
}

function stopGame() {
    counter = 0;
    movements = 0;
    okCounter = 0;
    clearInterval(interval);
}

function incrmentMovements() {
    movements += 1;

    document.getElementById('movements').innerHTML = movements;
}

function clearMovements() {
    document.getElementById('movements').innerHTML = 0;
}

window.onload = onLoad;