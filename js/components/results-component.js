'use strict';

import html from '../html.js';
import Bio from './bio.js';
import Pic from './pic.js';

// creates a component that puts the bio and pic of each love match together
// for display on results page

let template = function(person) {
    return html`
    <div class="bio-pic-combo">
        <div class="celeb-name"> <h3> ${person.name} </h3> </div>
    </div>
    `;
};

export default class BioPicCombo {

    constructor(props) {
        this.person = props.person;
        this.people = props.people;
    }

    render() {
        let dom = template(this.person);

        let biopiccombo = dom.querySelector('div.bio-pic-combo');

        let bio = new Bio({
            person: this.person,
            people: this.people
        });
        biopiccombo.appendChild(bio.render());

        let pic = new Pic({
            person: this.person,
            people: this.people
        });
        biopiccombo.appendChild(pic.render());

        return dom;
    }
}