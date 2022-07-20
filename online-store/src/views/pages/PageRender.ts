interface PageRender {
    render(str?: number): Promise<string>;
}

interface ICard {
    [key: string]: string | boolean;
    num: string;
    brand: string;
    model: string;
    year: string;
    body: string;
    color: string;
    transmission: string;
    fuel: string;
    favorite: boolean;
    btn: boolean;
}

export { PageRender, ICard };
