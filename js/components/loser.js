import html from '../html.js';

// create the html to display results for someone who has no matches

let template = function() {
    return html`
    <div class="loser">
        See a therapist you have no compatibility.
    </div>`;
};

export default class Loser {

    render() {
        let dom = template();
        return dom;
    }
}