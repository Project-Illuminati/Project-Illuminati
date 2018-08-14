'use strict';

import html from '/js/html.js';
import peopleApi from '../services/people-api.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`
    <main>

    </main>
    `;
};

// prints results data to screen
export default class App {

    constructor() {
        this.people = peopleApi.get();
    }

    render() {
        let dom = template();

        // // append header
        // this.main = dom.querySelector('main');
        // let header = new Header();
        // this.main.appendChild(header.render());

        // // append footer
        // let footer = new Footer();
        // this.main.appendChild(footer.render());

        // get product data from local storage

        console.log(this.people);

        return dom;
    }
}