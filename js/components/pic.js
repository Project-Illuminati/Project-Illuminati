'use strict';
import html from '../html.js';

// create the html to display each person's image

let template = function(person) {
    return html`
        <div class="image">
                <label>
                    <figure> <img src="${person.pic}" alt="${person.name}" width="200"> </figure>
                </label>
        </div>
    `;
};

export default class Pic {
    constructor(props) {
        this.person = props.person;
        this.people = props.people;
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.image');

        // the person looking for love was the last person added to the people list
        let chooser = this.people[this.people.length - 1];

        // put an event listener on all of the pictures and create an unselected/selected class
        // in order to un-highlight/highlight the picture
        // if the suitor is selected, add them to the chooser's picture picks list

        this.div.addEventListener('click', () => {
            if(this.div.classList.contains('selected')){
                this.div.classList.remove('selected');
                chooser.pic_picks = chooser.pic_picks.filter(item => item !== this.person);
            }
            else {
                this.div.classList.add('selected');
                chooser.pic_picks.push(this.person);
            }
        });
        return dom;
    }
}
