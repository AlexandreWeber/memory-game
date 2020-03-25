class Game {
	static getHtmlContent(heroe, index) {
		let htmlContent = '';

		if (this.isBegin(index)) {
			htmlContent += `<div class="row">`;
		}

		htmlContent += `
			<div class="col-2">
				<div class="card memory-card">
					<img id="${heroe.id}" src="${heroe.img}" class="card-img-top"/>
				</div>
			</div>
		`;

		if (this.isEnd(index)) {
			htmlContent += `</div>`
		}

		return htmlContent;
	}

	static updateContent(htmlContent) {
		const content = document.getElementById('content');

		content.innerHTML = htmlContent	;
	}

	static isBegin(index) {
		return index === 0 || index === 4 || index == 8;
	}

	static isEnd(index) {
		return index === 3 || index === 7 || index == 11;
	}


	static shuffle(heroes) {
		const newHeroes = [];
		const indexes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
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