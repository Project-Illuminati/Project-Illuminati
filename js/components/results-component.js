import html from '../html.js';
import Bio from './bio.js';
import Pic from './pic.js';

// creates a component that puts the bio and pic of each love match together
// for display on results page

let template = function(person) {
    return html`
        <div class="bio-pic-combo">
            <h3 class="celeb-name">${person.name}</h3>
        </div>
    `;
};

export default class BioPicCombo {

    constructor(props) {
        this.person = props.person;
    }

    render() {
        let dom = template(this.person);
        let bioPicCombo = dom.querySelector('div');

        let props = { person: this.person };
        let bio = new Bio(props);
        bioPicCombo.appendChild(bio.render());
        let pic = new Pic(props);
        bioPicCombo.appendChild(pic.render());

        return dom;
    }
}