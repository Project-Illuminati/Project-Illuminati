'use strict';
import html from '../html.js';

// create the html to display one person's image

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
        this.handleClicksPics = props.handleClicksPics;
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.image');
        let chooser = this.people[this.people.length - 1];

        this.div.addEventListener('click', () => {
            if(this.div.classList.contains("selected")){
                this.div.classList.remove("selected");
                this.div.classList.add("unselected");
                chooser.pic_picks = chooser.pic_picks.filter(item => item !== this.person);
            }
            else {
                this.div.classList.remove("unselected");
                this.div.classList.add("selected");
                chooser.pic_picks.push(this.person);
            }
            this.handleClicksPics(this.person);
        });
        return dom;
    }
}
