'use strict';

import peopleApi from '../services/people-api.js';
import ProfileInputForm from './profile-input-form.js';
import html from '../html.js';
import Header from './header.js';
import Footer from './footer.js';

let template = function() {
    return html`    
    <main class="grid">
    </main>`;

};

export default class App {
    constructor() {
        this.people = peopleApi.get();
    }
    render() {
        let dom = template();

        //append header
        this.main = dom.querySelector('main');
        let header = new Header();
        this.main.appendChild(header.render());

        let profileInputForm = new ProfileInputForm({
            people: this.people,
            onSubmit: (person) => {
                peopleApi.add(person);
            }
        });
        this.main.appendChild(profileInputForm.render());

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());

        return dom;
    }
}