'use strict';
import html from '../html.js';

// create the html to display one person's bio

let template = function(person) {
    return html`
    <div class="bio">
            <p> <span class="celeb-prop"> Celebrity Status: </span> ${person.income} </p>
            <p> <span class="celeb-prop"> Fertility: </span> ${person.fertility} </p>
            <p> <span class="celeb-prop"> Favorite Book: </span> ${person.book} </p>
            <p> <span class="celeb-prop"> Bio: </span> ${person.bio} </p>
            <p> <span class="celeb-prop"> Ladder Rating: </span> ${person.ladder_actual} </p>
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