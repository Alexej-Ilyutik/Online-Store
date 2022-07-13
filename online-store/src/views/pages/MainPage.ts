import { PageRender } from './PageRender';
import './../styles/main.scss';

const MainPage: PageRender = {
    render: async () => {
        const view = `<aside class="main__tools tools">
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
