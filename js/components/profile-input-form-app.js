import peopleApi from '../services/people-api.js';
import ProfileInputForm from './profile-input-form.js';
import html from '../html.js';
import Header from './header.js';
import Footer from './footer.js';

// create the form that allow a user to enter their profile

let template = function() {
    // grid2? how about profile-grid?
    return html`    
        <main class="grid2"></main>
    `;

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

        // create user input form
        let profileInputForm = new ProfileInputForm({
            people: this.people,
            onSubmit: (person) => {
                peopleApi.add(person); // add new user to local storage
                
                // add navigation here as a result of the action!
                window.location.href = 'choices-form.html';

                console.log('person', person);
            }
        });

        // display form on page
        this.main.appendChild(profileInputForm.render());

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());

        return dom;
    }
}