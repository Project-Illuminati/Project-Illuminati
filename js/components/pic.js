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
        this.handleClicksPics = props.handleClicksPics;
    }

    render() {
        let dom = template(this.person);
        this.div = dom.querySelector('div.image');
        this.div.addEventListener('click', () => {
            this.handleClicksPics(this.person);
        });
        return dom;
    }
}

