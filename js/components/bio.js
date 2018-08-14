'use strict';
import html from '../html.js';

// create the html to display one person's bio

let template = function(person) {
    return html`
    <div class="bio">
    <input type="checkbox" name="bio" id="bio" value="${person.name}"/>
        <label>
            Name: ${person.name}
            Income: ${person.income}
            Fertility: ${person.fertility}
            Favorite Book: ${person.book}
            Bio: ${person.bio}
            Ladder Rating: ${person.ladder_actual}
        </label>
    </div>`;
};

export default class Bio {
    constructor(props) {
        this.person = props.person;
        // this.onSelect = props.onSelect;
    }

    render() {
        let dom = template(this.person);

        return dom;
    }
}