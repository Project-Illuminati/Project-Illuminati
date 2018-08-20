import html from '../html.js';
import peopleApi from '../services/people-api.js';
import Header from './header.js';
import Footer from './footer.js';
import BioPicCombo from './results-component.js';
import Loser from './loser.js';

// display the user's final love matches
let template = function() {
    return html`
        <main>
            <div class="results-content">
            </div>
        </main>
    `;
};

// prints results data to screen
export default class App {

    constructor() {
        this.people = peopleApi.get();
    }

    render() {
        let dom = template();

        // attach the header;
        this.main = dom.querySelector('main');
        let header = new Header();
        this.main.appendChild(header.render());

        // the user is the past person added to the people list
        let chooser = this.people[this.people.length - 1];

        // finds their love matches (those who they chose both the pic and bio of)
        let matches = [];
        // any time repetitive obj.prop.prop use variables!
        let bioPicks = chooser.bio_picks;
        let picPicks = chooser.pic_picks;

        for(let i = 0 ; i < bioPicks.length; i++){
            let suitorName = bioPicks[i].name;
            for(let j = 0; j < picPicks.length; j++){
                if(suitorName === picPicks[j].name && !matches.includes(suitorName)){
                    matches.push(suitorName);
                }
            }
        }

        // put the bio and pic of each love match on the screen
        this.content = dom.querySelector('div.results-content');
        for(let i = 0; i < this.people.length; i++){
            let person = this.people[i];
            if(matches.includes(person.name)){
                let bioPicCombo = new BioPicCombo({
                    person: person,
                    people: this.people,
                });
                this.content.appendChild(bioPicCombo.render());

            }
        }

        // if there were no matches tell the person to go to therapy
        if(!matches.length){
            let loser = new Loser();
            this.content.appendChild(loser.render());
        }

        // append footer
        let footer = new Footer();
        this.main.appendChild(footer.render());

        return dom;
    }
}