'use strict';

import html from '/js/html.js';
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
        let json = window.localStorage.getItem('data');
        let data;
        if(json && json !== 'undefined') {
            data = JSON.parse(json);
        }
        let people = data.people;
        console.log(people);

        return dom;
    }
}
