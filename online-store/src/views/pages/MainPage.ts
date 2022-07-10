import { PageRender } from './PageRender';
import './../styles/main.scss';

const MainPage: PageRender = {
    render: async () => {
        const view = `<aside class="main__tools tools">
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
