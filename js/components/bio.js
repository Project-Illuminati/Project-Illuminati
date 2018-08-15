'use strict';
import html from '../html.js';

// create the html to display one person's bio

let template = function(person) {
    return html`
    <div class="bio">
            Income: ${person.income}
            Fertility: ${person.fertility}
            Favorite Book: ${person.book}
            Bio: ${person.bio}
            Ladder Rating: ${person.ladder_actual}
    </div>`;
};

export default class Bio {
    constructor(props) {
        this.person = props.person;
        this.handleClicksBios = props.handleClicksBios;
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.bio');
        this.div.addEventListener('click', () => {
            this.handleClicksBios(this.person);
        });
        return dom;
    }
}