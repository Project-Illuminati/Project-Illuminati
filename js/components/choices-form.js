'use strict';

import html from '../html.js';
import Bio from './bio.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <form>
        <input type="submit" onclick="window.location.href='../../choices-form.html'">
    </form>`;

};

export default class ChoicesForm {
    constructor(props) {
        // this.people = props.people;
        // this.onSubmit = props.onSubmit;
        this.suitors = props.suitors;
    }

    render() {
        let dom = template();

        this.form = dom.querySelector('form');

        for(let i = 0; i < this.suitors.length; i++) {
            let bio = new Bio({
                person: this.suitors[i]
            });
            this.form.appendChild(bio.render());
        }



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