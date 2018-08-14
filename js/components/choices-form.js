'use strict';

import html from '../html.js';
import Bio from './bio.js';
import Pic from './pic.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <div class="choice-form">
        <label><button id="done">Submit</label>
    </div>`;

};

export default class ChoicesForm {
    constructor(props) {
        this.handleClicks = props.handleClicks;
        this.handleDone = props.handleDone;
        this.suitors = props.suitors;
    }

    render() {
        let dom = template();

        this.form = dom.querySelector('div.choice-form');

        for(let i = 0; i < this.suitors.length; i++) {
            let bio = new Bio({
                person: this.suitors[i],
                handleClicks: this.handleClicks
            });
            this.form.appendChild(bio.render());
        }

        let button = dom.querySelector('button');
        button.addEventListener('click', () => {
            this.handleDone();
            console.log('button');

        });

        return dom;

    }

    update(props) {
        this.people = props.people;
        while(this.form.lastElementChild){
            this.form.lastElementChild.remove();
        }
        console.log('hey!!');

        for(let i = 0; i < this.suitors.length; i++) {
            let pic = new Pic({
                person: this.suitors[i],
                handleClicks: this.handleClicks
            });
            this.form.appendChild(pic.render());
        }
    }
}