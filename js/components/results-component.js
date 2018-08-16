'use strict';

import html from '/js/html.js';
import Bio from './bio.js';
import Pic from './pic.js';

let template = function(person) {
    return html`
    <div class="bio-pic-combo">
    <div class="celeb-name"> <h3> ${person.name} </h3> </div>
    </div>
    `;
};

// prints results data to screen
export default class BioPicCombo {

    constructor(props) {
        this.person = props.person;
    }

    render() {
        let dom = template(this.person);


        let biopiccombo = dom.querySelector('div.bio-pic-combo');

        let bio = new Bio({
            person: this.person
        });
        biopiccombo.appendChild(bio.render());

        let pic = new Pic({
            person: this.person
        });
        biopiccombo.appendChild(pic.render());

        return dom;
    }
}