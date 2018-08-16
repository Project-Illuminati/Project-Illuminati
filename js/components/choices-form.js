'use strict';

import html from '../html.js';
import Bio from './bio.js';
import Pic from './pic.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`
    <div class="form-contents">    
        <div class="outer-choice-form">
            <div class="choice-form"></div>
            <label><button class="done">Submit</label>
        </div>
        <label><button class="redirect" id="redirect" onclick="window.location.href='../../results.html'">Show me my matches!</label>
    </div>
    `;
};

export default class ChoicesForm {
    constructor(props) {
        this.handleClicksBios = props.handleClicksBios;
        this.handleClicksPics = props.handleClicksPics;
        this.handleDone = props.handleDone;
        this.suitors = props.suitors;
    }

    render() {
        let dom = template();

        this.form = dom.querySelector('div.choice-form');
        this.containingFormDiv = dom.querySelector('.outer-choice-form');

        for(let i = 0; i < this.suitors.length; i++) {
            let bio = new Bio({
                person: this.suitors[i],
                handleClicksBios: this.handleClicksBios
            });
            this.form.appendChild(bio.render());
        }

        let firstButton = dom.querySelector('button.done');
        firstButton.addEventListener('click', () => {
            this.handleDone();
            console.log('button.done');
            secondButton.hidden = false;

        });


        let secondButton = dom.querySelector('button.redirect');
        secondButton.hidden = true;
        secondButton.addEventListener('click', () => {
            this.handleDone();
            console.log('button.redirect');
        });

        return dom;

    }

    update(props) {
        this.people = props.people;
        this.containingFormDiv.lastElementChild.remove();
        while(this.form.lastElementChild){
            this.form.lastElementChild.remove();
        }
        console.log('hey!!');

        for(let i = 0; i < this.suitors.length; i++) {
            let pic = new Pic({
                person: this.suitors[i],
                handleClicksPics: this.handleClicksPics
            });
            this.form.appendChild(pic.render());
        }


    }
}