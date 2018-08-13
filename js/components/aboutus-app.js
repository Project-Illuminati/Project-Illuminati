import html from '/js/html.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

let template = function() {
    return html`
        <div class="header">

        </div>
        <main>
            <div class="container1">Some stuff</div>
            <div class="container2">Some more stuff</div>
            <div class="container3">Lies and slander</div>
        </main>
        <div class="footer">

        </div>
    `;
};

export default class App {
    constructor() {

    }

    render() {
        let dom = template();
        let head = dom.querySelector('.header');
        let foot = dom.querySelector('.footer');

        let header = new Header();
        let footer = new Footer();

        head.appendChild(header.render());
        foot.appendChild(footer.render());

        return dom;
    }
}