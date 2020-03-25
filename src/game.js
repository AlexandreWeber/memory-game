class Game {
	static getHtmlContent(heroe) {
		return `
			<div class="col-4 col-md-3">
				<div class="card memory-card">
					<img id="${heroe.id}" src="${heroe.img}" class="card-img-top"/>
				</div>
			</div>
		`;
	}

	static updateContent(htmlContent) {
		const content = document.getElementById('content');

		content.innerHTML = htmlContent	;
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