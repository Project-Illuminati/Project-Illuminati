import html from '/js/html.js';
import Footer from '../components/footer.js';
import Header from '../components/header.js';

let template = function() {
    return html`
        <div class="header">

        </div>
        <main>
            <div class="container">
                <img class="bio-pic" src="../img/laurenpic.png">

                <p class="bio-text">I'm an expert in celebrities.</p>

                <p class="bio-text">I spend all of my time reading Us Weekly and TMZ.</p>

                <p class="bio-text">It's such a tiring job but someone has to do it.</p>
            </div>
            <div class="container">
                <img class="bio-pic" id="right-pic" src="../img/clairepic.png">

                <p>I'm an expert in ladders.</p>

                <p>Since the first time I saw a ladder, I knew.</p>

                <p>Also... I LOVE buckets. Mr. Bucket is my secret crush!</p>

                <img class="bio-pic" id="right-pic" src="../img/mr-bucket.jpg">

                <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>
            </div>
            <div class="container">
                <img class="bio-pic" src="../img/ronpic.png">

                <p class="bio-text">I'm an expert in love.</p>

                <p class="bio-text">I'm on my 6th marriage so clearly I'm an expert in love.</p>

                <p class="bio-text">I want to help you achieve better success than Brangelina!</p>
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