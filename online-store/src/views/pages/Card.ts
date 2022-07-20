class CardAuto {
    constructor(
        public num: string,
        public brand: string,
        public model: string,
        public year: string,
        public body: string,
        public color: string,
        public transmission: string,
        public fuel: string,
        public favorite: boolean,
        public btn: boolean
    ) {}

    createCard(strClass: string, strVal: string) {
        const card = document.createElement('div');
        card.classList.add('feed__card');
        card.innerHTML = `
                <div class="card__img">
                  <img src="./assets/images/${this.num}.webp" alt="${this.brand}">
                </div>
                <div class="card__description">
                  <h2 class="card__title">${this.brand}</h2>
                  <p class="card__text"><span class="card__option">Model:</span> ${this.model}</p>
                  <p class="card__text"><span class="card__option">Body type:</span> ${this.body}</p>
                  <p class="card__text"><span class="card__option">Year:</span> ${this.year}</p>
                  <p class="card__text"><span class="card__option">Transmission:</span> ${this.transmission}</p>
                  <p class="card__text"><span class="card__option">Fuel type:</span> ${this.fuel}</p>
                  <p class="card__text"><span class="card__option">Color:</span> ${this.color}</p>
                  <button class="card__button ${strClass}" data-filter="${this.num}">${strVal}</button>
                </div>
                `;
        return card;
    }
}

export { CardAuto };
