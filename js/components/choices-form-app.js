import html from '../html.js';
import Header from './header.js';
import Footer from './footer.js';
import NonRandomLadderNumber from './non-random-ladder-number.js';
import peopleApi from '../services/people-api.js';
import ChoicesForm from './choices-form.js';

// creates the html that displays the suitor bios and then suitor pictures
let template = function() {
    return html`
        <main class="grid"></main>
    `;
};

// prints results data to screen
export default class App {
    constructor() {
        this.people = peopleApi.get();
    }
    render() {
        let dom = template();

        // append header
        this.main = dom.querySelector('main');
        let header = new Header();
        this.main.appendChild(header.render());

        // assign a ladder rating and post a message accordingly
        let nonrandomNumberLadder = new NonRandomLadderNumber({ people: this.people });
        this.main.appendChild(nonrandomNumberLadder.render());

        // see other note on adding this to data, rather than guessing last person
        const person = this.people[this.people.length - 1];

        // find suitors in this range
        let suitors = findSuitors(person, this.people);

        // create the "form" that lets user select bios and pics
        // upon update, display pics instead of bios

        let choicesForm = new ChoicesForm({
            suitors: suitors,
            chooser: person,
            handleDone: () => {
                // This is goofy, done should mean done.

                // Choices form can manage itself and the report results
                window.location.href = 'results.html';
            }
        });
        this.main.appendChild(choicesForm.render());

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());
        return dom;

    }
}

// nice use of function to encapsulate the algorithm!

// find the available people in the user's ladder range
function findSuitors(person, people) {
    let suitorArray = [];

    // return suitors within 2 ladder rankings of this suitor (excluding suitor)
    for(let i = 0; i < people.length - 1; i ++) {
        let suitor = people[i];
        if(suitor === person) continue;

        if(Math.abs(suitor.ladder_actual - person.ladder_actual) <= 2){
            suitorArray.push(suitor);
        }
    }
    return suitorArray;
}