import { PageRender } from './../pages/PageRender';
import './../styles/header.scss';

const Header: PageRender = {
    render: async () => {
        const view = `<figure class="header__logo">
          <img src="../../assets/svg/car-logo.svg" alt="Logo" />
          <figcaption>Online Store</figcaption>
        </figure>
         <div class="header__tools tools">
          <div class="tools__search">
            <input class="search" type="search" placeholder="Search here..." required>
            <button class="search-btn" type="submit">Search</button>
          </div>
          <div class="tools__basket basket">
            <div class="basket__img"></div>
            <div class="basket__info">
              <span class ="basket__count">2</span>
            </div>
            
          </div>
        </div>
        `;
        return view;
    },
};

export { Header };
