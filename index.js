const heroes = Game.getHeroes();

let gameState = {
	card1: {},
	card2: {},
	counter: 0,
	movements: 0,
	interval: undefined,
	okCounter: 0
}

function onLoad() {
	this.generateGame(heroes);

	document.getElementById("new-game").addEventListener("click", () => this.generateGame(heroes));
}

function generateGame(heroes) {
	let htmlContent = '';

	clearGameState();

	heroes = Game.shuffle(heroes);

	heroes.map((heroe) => {
		htmlContent += Game.getHtmlContent(heroe);
	});

	Game.updateContent(htmlContent);
	Game.hideHeroes();
	this.handleClick();
	this.startTimer();
}

function clearGameState() {
	gameState.counter = 0;
	gameState.movements = 0;
	gameState.okCounter = 0;
	clearInterval(gameState.interval);
	clearMovements();
}

function handleClick() {
	document.querySelectorAll('.memory-card')
		.forEach((heroe) => {
			heroe.addEventListener('click', (event) => {
				if (gameState.card1.id && gameState.card2.id || (gameState.card1.id === +event.target.id || gameState.card2.id === +event.target.id) ||
					event.target.src.indexOf("default") === -1) {
					return;
				}

				this.incrementMovements();

				const h = heroes.find(heroe => heroe.id === +event.target.id)
				event.target.src = h.img;

				if (!gameState.card1.id) {
					gameState.card1 = {
						id: h.id,
						name: h.name
					};
				} else {
					gameState.card2 = {
						id: h.id,
						name: h.name
					};
				}

				if (gameState.card1.id && gameState.card2.id) {
					if (gameState.card1.name === gameState.card2.name) {
						gameState.card1 = {};
						gameState.card2 = {};
						gameState.okCounter += 1;

						if (gameState.okCounter === 12) {
							this.stopGame();
						}
					} else if (gameState.card2.name) {
						setTimeout(() => {
							Game.hideHeroe(gameState.card1.id);
							Game.hideHeroe(gameState.card2.id);
							gameState.card1 = {};
							gameState.card2 = {};
						}, 500);
					}
				}
			})
		});
}

function startTimer() {
	gameState.interval = setInterval(() => {
		document.getElementById('timer').innerHTML = gameState.counter;

		gameState.counter++;
	}, 1000);
}

function stopGame() {
	gameState.counter = 0;
	gameState.movements = 0;
	gameState.okCounter = 0;
	clearInterval(gameState.interval);
}

function incrementMovements() {
	gameState.movements += 1;

	document.getElementById('movements').innerHTML = gameState.movements;
}

function clearMovements() {
	document.getElementById('movements').innerHTML = 0;
}

window.onload = onLoad;