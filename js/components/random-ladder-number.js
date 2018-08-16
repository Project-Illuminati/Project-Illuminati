'use strict';

import html from '../html.js';

let template = function(intro_message) {
    return html`
    <div class = 'intro-message'>${intro_message}</div>
    `;
};

// prints results data to screen
export default class RandomLadderNumber {
    constructor(props) {
        this.people = props.people;
    }

    render() {

        // assign person an actual ladder number
        let person = this.people[this.people.length - 1];
        person.ladder_actual = getRandInteger(0, 10);

        // create a message based on the discrepancy between ladder guess and actual
        let intro_message = '';
        if(person.ladder_guess - person.ladder_actual >= 2) {
            intro_message += 'Way off! Get a clue.';
        }
        else if(person.ladder_guess - person.ladder_actual === 1) {
            intro_message += 'Just a tad over confident.';
        }
        else if(person.ladder_guess - person.ladder_actual === 0) {
            intro_message += 'Spot on! How perceptive!';
        }
        else if(person.ladder_guess - person.ladder_actual === -1) {
            intro_message += 'Good news! You\'re a little hotter than you think you are!';
        }
        else {
            intro_message += 'Whoa! Get some self esteem.';
        }
        intro_message += ' You guessed a ' + person.ladder_guess;
        intro_message += ' but your actual ladder rating is a ' + person.ladder_actual + '.';
        intro_message += ' Here are suitors in your ladder range.';
        let dom = template(intro_message);
        return dom;
    }
}

//get a random number (inclusive)
function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}