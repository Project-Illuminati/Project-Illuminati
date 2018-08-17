import html from '../html.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

// for the about us page

let template = function() {
    return html`
        <div class="header">

        </div>
        <main class="aboutme-content">
            <div class="container">
                <div class="bio-pic-combo">
                    <img class="bio-pic" src="img/laurenpic.png">

                    <p class="bio-text">I'm an expert in celebrities.</p>

                    <p class="bio-text">I spend all of my time reading Us Weekly and TMZ. It's such a tiring job but someone has to do it.</p>
                </div>
            </div>
            <div class="container">
                <div class="bio-pic-combo">
                    <img class="bio-pic" src="img/clairepic.png">

                    <p class="bio-text">I'm an expert in ladders.</p>

                    <p class="bio-text">Since the first time I saw a ladder, I knew this would be my destiny.</p>
                </div>
            </div>
            <div class="container">
                <div class="bio-pic-combo">
                    <img class="bio-pic" src="img/ronpic.png">

                    <p class="bio-text">I'm an expert in love.</p>

                    <p class="bio-text">I'm on my 6th marriage. I want to help you achieve the same success I have!</p>
                </div>
            </div>
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