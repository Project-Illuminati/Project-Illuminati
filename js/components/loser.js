'use strict';
import html from '../html.js';

// create the html to display one person's bio

let template = function() {
    return html`
    <div class="loser">
    See a therapist you have no compatibility.
    </div>`;
};

export default class Loser {

    render() {
        let dom = template();
        this.div = dom.querySelector('div.loser');
        return dom;
    }
}