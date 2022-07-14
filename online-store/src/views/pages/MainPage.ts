import { PageRender } from './PageRender';
import './../styles/main.scss';

const MainPage: PageRender = {
    render: async () => {
        const view = `<aside class="main__tools tools">
          <div class="tools__sort">
            <p class="tools__title">Sorting:</p>
            <select class="tools__select">
              <option selected>Without</option>
              <option>By name: "A" &#8658; "Z"</option>
              <option>By name: "Z" &#8658; "A"</option>
              <option>By year: &#8657;</option>
              <option>By year: &#8659;</option>
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
            <select class="tools__select">
              <option selected>All</option>
              <option>Automatic</option>
              <option>Manual</option>
              <option>Automanual</option>
             </select>
          </div>
          <div class="tools__fuel">
            <p class="tools__title">Fuel type:</p>
            <select class="tools__select">
              <option selected>All</option>
              <option>Gasoline</option>
              <option>Diesel</option>
              <option>Electric</option>
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
            <my-range-slider id="range-slider-year" minValue="2000" maxValue="2021" step="1" lineWidth="260" startValue="2005" endValue="2018" runerSize="16"></my-range-slider>
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
   
          <button class="feed__btn">Show more...</button>
          
        </article>
        <div class="main__line"></div>
        `;
        return view;
    },
};

export { MainPage };
