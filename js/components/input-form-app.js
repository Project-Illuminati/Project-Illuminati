'use strict';

import peopleApi from '../services/people-api.js';
import ProfileInputForm from './profile-input-form.js';
import html from '../html.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <main>
    </main>`;

};

export default class App {
    constructor() {
        this.people = peopleApi.get();
    }
    render() {
        let dom = template();

        this.main = dom.querySelector('main');
        let profileInputForm = new ProfileInputForm({
            people: this.people
        });
        this.main.appendChild(profileInputForm.render());

        return dom;
    }
}