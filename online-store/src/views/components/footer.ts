import { PageRender } from './../pages/PageRender';
import './../styles/footer.scss';

const Footer: PageRender = {
    render: async () => {
        const view = `<div class="footer__link">
          <img src="./../../assets/svg/github.svg" alt="GitHub">
          <a href="https://github.com/Alexej-Ilyutik" target="_blank">
            Alexej Ilyutik
          </a>
        </div>
        <p>2022</p>
        `;
        return view;
    },
};

export { Footer };
