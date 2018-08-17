'use strict';
import html from '../html.js';

// creates the html to display each person's bio

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
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.bio');

        // the person looking for love was the last person added to the people list
        let chooser = this.people[this.people.length - 1];

        // put an event listener on all of the bios and create an unselected/selected class
        // in order to un-highlight/highlight the bio
        // if the suitor is selected, add them to the chooser's bio picks list

        this.div.addEventListener('click', () => {
            if(this.div.classList.contains('selected')){
                this.div.classList.remove('selected');
                chooser.bio_picks = chooser.bio_picks.filter(item => item !== this.person);
            }
            else {
                this.div.classList.add('selected');
                chooser.bio_picks.push(this.person);
            }
        });

        return dom;
    }
}