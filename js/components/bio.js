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
        this.people = props.people;
        this.handleClicksBios = props.handleClicksBios;
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.bio');

        let chooser = this.people[this.people.length - 1];

        this.div.addEventListener('click', () => {
            if(this.div.classList.contains("selected")){
                this.div.classList.remove("selected");
                this.div.classList.add("unselected");
                chooser.bio_picks = chooser.bio_picks.filter(item => item !== this.person);
            }
            else {
                this.div.classList.remove("unselected");
                this.div.classList.add("selected");
                chooser.bio_picks.push(this.person);
            }
            this.handleClicksBios(this.person);
        });

        return dom;
    }
}