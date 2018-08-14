'use strict';

import html from '../html.js';
import Bio from './bio.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <div class="choice-form">
        <label><button id="done" onclick="window.location.href='../../choices-form.html'">Submit</label>
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
        });



        // this.form.addEventListener('submit', (event) => {
        //     // #1 Prevent default posting of the form
        //     event.preventDefault();

        //     // #2 Gather up data

        //     try {
        //         // #4 Process success or failure
        //         this.onSubmit(person);
        //         this.form.reset();
        //         document.activeElement.blur();
        //     }
        //     catch (err) {
        //         // #4 Process success or failure
        //         console.log(err.message);
        //     }

        // });

        return dom;

    }
}