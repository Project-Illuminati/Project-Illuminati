'use strict';

import html from '../html.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <form>
        <label>Name:</label>
            <input name="name" type="text"><br>
        <label>Income</label>
            <select id="income">
                <option value="0-50K">0 - 50K</option>
                <option value="50-100K">50 - 100K</option>
                <option value="100-150K">100 - 150K</option>
                <option value="150-200K">150 - 200K</option>
                <option value="200K+">200K+</option>
            </select><br>
        <label>Fertility</label>
            <input type="range" min="1" max="5" id="fertility"><br>
        <label>Favorite Book</label>
            <select id="book">
                <option value="If I Did It by OJ Simpson">If I Did It by OJ Simpson</option>
                <option value="Awaken the Giant Within by Tony Robbins">Awaken the Giant Within by Tony Robbins</option>
                <option value="Atlas Shrugged by Ayn Rand">Atlas Shrugged by Ayn Rand</option>
                <option value="The Bible by God">The Bible by God</option>
                <option value="Leaves of Grass by Walt Whitman">Leaves of Grass by Walt Whitman</option>
                <option value="An Inconvenient Truth by Al Gore">An Inconvenient Truth by Al Gore</option>
            </select><br>
        <label>How would your best friend describe you?</label>
            <textarea name="bio" rows="3" cols="30"></textarea><br>
        <label>Insert a URL of a recent picture of yourself.</label>
            <input name="pic" type="text"><br>
        <label>What ladder number do you think you are?</label>
            <input type="range" min="0" max="10" id="ladder_guess"><br>
        <input type="submit" onclick="window.location.href='../../results.html'">
    </form>`;

};

export default class ProfileInputForm {
    constructor(props) {
        this.people = props.people;
        this.onSubmit = props.onSubmit;
    }
    redirect() {
        console.log('redirecting');
    }
    render() {
        let dom = template();

        this.form = dom.querySelector('form');

        this.form.addEventListener('submit', (event) => {
            // #1 Prevent default posting of the form
            event.preventDefault();

            // #2 Gather up data
            let elements = this.form.elements;
            let name = elements.name.value;
            let income = elements.income.value;
            let fertility = elements.fertility.value;
            let book = elements.book.value;
            let bio = elements.bio.value;
            let pic = elements.pic.value;
            let ladder = parseInt(elements.ladder_guess.value);

            this.person = { name: name,
                income: income,
                fertility: fertility,
                book: book,
                bio: bio,
                pic: pic,
                ladder_guess: ladder,
                bio_picks: [],
                pic_picks: [] };

            try {
                // #4 Process success or failure
                this.people.push(this.person);
                console.log('last user entry', this.people[this.people.length - 1]);
                this.form.reset();
                document.activeElement.blur();
            }
            catch (err) {
                // #4 Process success or failure
                console.log(err.message);
            }

        });

        return dom;

    }
}