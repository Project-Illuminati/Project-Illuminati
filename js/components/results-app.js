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
        let person = people[people.length - 1];
        person.ladder_actual = getRandInteger(0, 10);
        console.log('You guessed', person.ladder_guess, 'but your actual is a ', person.ladder_actual);
        if(person.ladder_guess - person.ladder_actual >= 2) {
            console.log('Way off! Get a clue.');
        }
        else if(person.ladder_guess - person.ladder_actual === 1) {
            console.log('Just a tad over confident.');
        }
        else if(person.ladder_guess - person.ladder_actual === 0) {
            console.log('Spot on! How perceptive!');
        }
        else if(person.ladder_guess - person.ladder_actual === -1) {
            console.log('Good news! You\'re a little better than that!');
        }
        else {
            console.log('Whoa! Get some self esteem.');
        }
        return dom;
    }
}

//get a random number (inclusive)
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}