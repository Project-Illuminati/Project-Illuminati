import html from '../html.js';

// give the user a random ladder number and generate a message
// based on the discrepancy between their guess and the assigned number
// on the choices page

let template = function(person, message) {
    return html`
        <div class="intro-message">
            <p>${message}</p>
            <p>You guessed a ${person.ladder_guess} but your actual ladder rating is a ${person.ladder_actual}.</p>
            <p>Here are suitors in your ladder range.</p>
        </div>
    `;
};

export default class NonRandomLadderNumber {
    constructor(props) {
        this.people = props.people;
    }

    render() {

        // This is a possible failure point to depend on person being last in array.
        // Better to set a different data key for "currentPerson".

        // assign person an actual ladder number based on their celeb status
        let person = this.people[this.people.length - 1];
        let status = person.celebStatus;

        if(status === 'Famous for being racist'){
            person.ladder_actual = 0;
        }
        else if(status === 'Friends with Bono'){
            person.ladder_actual = 10;
        }
        else {
            person.ladder_actual = getRandInteger(0, 10);
        }

        // create a message based on the discrepancy between ladder guess and actual
        let intro_message;

        // don't recompute over and over...
        let diff = person.ladder_guess - person.ladder_actual;
        if(diff >= 2) {
            intro_message = 'Way off!  Get a clue.';
        }
        else if(diff === 1) {
            intro_message = 'Just a tad over confident.';
        }
        else if(diff === 0) {
            intro_message = 'Spot on!  How perceptive!';
        }
        else if(diff === -1) {
            intro_message = 'Good news!  You\'re a little hotter than you think you are!';
        }
        else {
            intro_message = 'Whoa!  Get some self esteem.';
        }

        // :( on string concat html. move into template!

        // intro_message += ' You guessed a ' + person.ladder_guess + ' but your actual ladder rating is a ' + person.ladder_actual + '. <br>' ;

        // intro_message += ' <p> Here are suitors in your ladder range.  Click to select bios of interest.</p>';
        // intro_message += ' <p>  </p>';

        let dom = template(person, intro_message);
        return dom;
    }
}

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}