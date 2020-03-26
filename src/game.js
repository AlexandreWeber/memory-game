class Game {
	static getHtmlContent(heroe) {
		return `
			<div class="col-2 col-md-2">
				<div class="card memory-card">
					<img id="${heroe.id}" src="${heroe.img}" class="card-img-top"/>
				</div>
			</div>
		`;
	}

	static getHeroes() {
		return [{
			id: 1,
			img: './assets/batman.png',
			name: 'Batman'
		}, {
			id: 2,
			img: './assets/thor.png',
			name: 'Thor'
		}, {
			id: 3,
			img: './assets/flash.png',
			name: 'Flash'
		}, {
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
			img: './assets/daredevil.png',
			name: 'Daredevil'
		}, {
			id: 8,
			img: './assets/groot.png',
			name: 'Groot'
		}, {
			id: 9,
			img: './assets/iron.png',
			name: 'Iron'
		}, {
			id: 10,
			img: './assets/spider.png',
			name: 'Spider-Man'
		}, {
			id: 11,
			img: './assets/captain.png',
			name: 'Captain'
		}, {
			id: 12,
			img: './assets/deadpool.png',
			name: 'Deadpool'
		}, {
			id: 13,
			img: './assets/batman.png',
			name: 'Batman'
		}, {
			id: 14,
			img: './assets/thor.png',
			name: 'Thor'
		}, {
			id: 15,
			img: './assets/flash.png',
			name: 'Flash'
		}, {
			id: 16,
			img: './assets/woman.png',
			name: 'Woman'
		}, {
			id: 17,
			img: './assets/hellboy.png',
			name: 'Hellboy'
		}, {
			id: 18,
			img: './assets/wonder.png',
			name: 'Wonder Woman'
		}, {
			id: 19,
			img: './assets/daredevil.png',
			name: 'Daredevil'
		}, {
			id: 20,
			img: './assets/groot.png',
			name: 'Groot'
		}, {
			id: 21,
			img: './assets/iron.png',
			name: 'Iron'
		}, {
			id: 22,
			img: './assets/spider.png',
			name: 'Spider-Man'
		}, {
			id: 23,
			img: './assets/captain.png',
			name: 'Captain'
		}, {
			id: 24,
			img: './assets/deadpool.png',
			name: 'Deadpool'
		}];
	}

	static hideHeroes() {
		document.querySelectorAll('.card-img-top')
			.forEach((heroe) => {
				heroe.src = "./assets/default.png"
			});
	}

	static hideHeroe(id) {
		document.getElementById(`${id}`).src = "./assets/default.png";
	}

	static updateContent(htmlContent) {
		const content = document.getElementById('content');

		content.innerHTML = htmlContent;
	}

	static shuffle(heroes) {
		const newHeroes = [];
		const indexes = heroes.map((heroe, index) => index);
		let total = 0;

		while (total < heroes.length) {
			const index = Math.round(Math.random() * (indexes.length - 1));
			newHeroes.push(heroes[indexes[index]]);
			indexes.splice(index, 1);
			total++;
		}

		return newHeroes;
	}
}