import { ICard } from '../views/pages/PageRender';

class CardsSort {
    constructor(public cardArray: ICard[]) {}

    sortAtoZ() {
        this.cardArray.sort((a, b) => {
            if (a.model > b.model) {
                return 1;
            }
            if (a.model < b.model) {
                return -1;
            }
            return 0;
        });
    }
    sortZtoA() {
        this.cardArray.sort((a, b) => {
            if (a.model > b.model) {
                return -1;
            }
            if (a.model < b.model) {
                return 1;
            }
            // a должно быть равным b
            return 0;
        });
    }

    sortYearMax() {
        this.cardArray.sort((a, b) => +a.year - +b.year);
    }

    sortYearMin() {
        this.cardArray.sort((a, b) => +b.year - +a.year);
    }
}

export { CardsSort };
