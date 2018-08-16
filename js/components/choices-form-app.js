'use strict';

import html from '/js/html.js';
import Header from './header.js';
import Footer from './footer.js';
import RandomLadderNumber from './random-ladder-number.js';
import peopleApi from '../services/people-api.js';
import ChoicesForm from './choices-form.js';

let template = function() {
    return html`
    <main>
        <div class="intro-message"></div>
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

        // append header
        this.main = dom.querySelector('main');
        let header = new Header();
        this.main.appendChild(header.render());

        // assign a ladder rating and post a message accordingly
        let randomNumberLadder = new RandomLadderNumber({ people: this.people });
        this.main.appendChild(randomNumberLadder.render());

        // find suitors in this range
        let suitors = findSuitors(this.people);

        let choicesForm = new ChoicesForm({
            suitors: suitors,
            handleClicksBios: (person) => {
                let chooser = this.people[this.people.length - 1];
                chooser.bio_picks.push(person);
            },
            handleClicksPics: (person) => {
                let chooser = this.people[this.people.length - 1];
                chooser.pic_picks.push(person);
            },
            handleDone: () => {
                console.log('inside handle done');
                choicesForm.update({
                    people: this.people
                });

            }
        });
        this.main.appendChild(choicesForm.render());

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());
        return dom;

    }
}

function findSuitors(people) {
    let suitorArray = [];

    // user is last person added to people
    let person = people[people.length - 1];

    // return suitors within 2 ladder rankings of this suitor (excluding suitor)
    for(let i = 0; i < people.length - 1; i ++) {
        let suitor = people[i];
        if(Math.abs(suitor.ladder_actual - person.ladder_actual) <= 2){
            suitorArray.push(suitor);
        }
    }
    return suitorArray;
}