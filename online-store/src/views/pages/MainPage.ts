import { PageRender, ICard } from './PageRender';
import { CardAuto } from './Card';
// import { data } from '../../data';
// import { CardsSort } from '../../services/sort';
import './../styles/main.scss';

const MainPage: PageRender = {
    render: async () => {
        const view = `<aside class="main__tools tools">
          <div class="tools__sort">
            <p class="tools__title">Sorting:</p>
            <select class="tools__select sort">
              <option value="without" selected>Without</option>
              <option value="sort-name-max">By name: "A" &#8658; "Z"</option>
              <option value="sort-name-min">By name: "Z" &#8658; "A"</option>
              <option value="sort-year-max">By year: &#8657;</option>
              <option value="sort-year-min">By year: &#8659;</option>
             </select>
          </div>
          <div class="tools__brand">
            <p class="tools__title">Brand:</p>
            <button class="tools__button brand" data-filter="Audi"></button>
            <button class="tools__button brand" data-filter="BMW"></button>
            <button class="tools__button brand" data-filter="Ford"></button>
            <button class="tools__button brand" data-filter="Honda"></button>
            <button class="tools__button brand" data-filter="Mercedes"></button>
            <button class="tools__button brand" data-filter="Porsche"></button>
          </div>
          <div class="tools__body">
            <p class="tools__title">Body:</p>
            <button class="tools__button body" data-filter="Coupe"></button>
            <button class="tools__button body" data-filter="Hatchback"></button>
            <button class="tools__button body" data-filter="Pickup"></button>
            <button class="tools__button body" data-filter="SUV"></button>
            <button class="tools__button body" data-filter="Sedan"></button>
          </div>
          <div class="tools__transmission">
            <p class="tools__title">Transmission:</p>
            <select class="tools__select transmission">
              <option value="All" selected>All</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Automanual">Automanual</option>
             </select>
          </div>
          <div class="tools__fuel">
            <p class="tools__title">Fuel type:</p>
            <select class="tools__select fuel">
              <option value="All" selected>All</option>
              <option value="Gasoline">Gasoline</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
             </select>
          </div>
          <div class="tools__color">
            <p class="tools__title">Color:</p>
            <button class="tools__button color" data-filter="Black"></button>
            <button class="tools__button color" data-filter="White"></button>
            <button class="tools__button color" data-filter="Blue"></button>
            <button class="tools__button color" data-filter="Red"></button>
            <button class="tools__button color" data-filter="Gray"></button>
          </div>
          <div class="tools__year">
            <p class="tools__title">Year:</p>
            <my-range-slider id="range-slider-year" minValue="2000" maxValue="2021" step="1" lineWidth="260" startValue="2000" endValue="2021" runerSize="20"></my-range-slider>
          </div>
          <div class="tools__popular">
            <p class="tools__title">Popular:</p>
            <div class="tools__checkbox popular">
              <input type="checkbox" class="popular__input" id="checkbox-popular">
              <label for="checkbox-popular" class="popular__label"></label>
            </div>
          </div>
          <button class="tools__reset">Reset filters</button>
        </aside>
        <article class="main__feed feed">
        </article>
        <div class="main__line"></div>`;
        return view;
    },
};

function renderCards(array: ICard[]) {
    const FEED_CONTAINER = null || document.querySelector('.main__feed');
    FEED_CONTAINER.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        const numImg = array[i]['num'];
        const brandAuto = array[i]['brand'];
        const modelAuto = array[i]['model'];
        const yearAuto = array[i]['year'];
        const bodyType = array[i]['body'];
        const colorBody = array[i]['color'];
        const transmissionType = array[i]['transmission'];
        const fuelType = array[i]['fuel'];
        const favoriteAuto = array[i]['favorite'];

        const newCard = new CardAuto(
            numImg,
            brandAuto,
            modelAuto,
            yearAuto,
            bodyType,
            colorBody,
            transmissionType,
            fuelType,
            favoriteAuto
        );

        FEED_CONTAINER.appendChild(newCard.createCard());
    }
}

function filterByType(array: ICard[], key: string, val: string) {
    const newArr = array.filter((el) => el[key] === val);
    return newArr;
}

function filterByYear(array: ICard[], min: number, max: number) {
    const newArr: ICard[] = [];
    array.forEach((el) => {
        if (+el.year >= min && +el.year <= max) {
            newArr.push(el);
        }
    });
    return newArr;
}

export { MainPage, renderCards, filterByType, filterByYear };
