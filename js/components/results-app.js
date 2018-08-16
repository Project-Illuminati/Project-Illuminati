'use strict';

import html from '/js/html.js';
import peopleApi from '../services/people-api.js';
import Header from './header.js';
import BioPicCombo from './results-component.js';
import Footer from './footer.js';
import Loser from './loser.js';

let template = function() {
    return html`
    <main>
    <div class="results-content">
    </div>
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

        this.main = dom.querySelector('main');
        let header = new Header();
        this.main.appendChild(header.render());

        let chooser = this.people[this.people.length - 1];

        // finds the love matches
        let matches = [];
        for(let i = 0 ; i < chooser.bio_picks.length; i++){
            let suitorName = chooser.bio_picks[i].name;
            for(let j = 0; j < chooser.pic_picks.length; j++){
                if(suitorName === chooser.pic_picks[j].name && !matches.includes(suitorName)){
                    matches.push(suitorName);
                }
            }
        }
        console.log(matches);

        this.content = dom.querySelector('div.results-content');
        for(let i = 0; i < this.people.length; i++){
            let person = this.people[i];
            if(matches.includes(person.name)){
                let bioPicCombo = new BioPicCombo({
                    person: person
                });
                this.content.appendChild(bioPicCombo.render());

            }
        }
        if(!matches.length){
            let loser = new Loser();
            this.content.appendChild(loser.render());

        }

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());

        return dom;
    }
}