'use strict';

import peopleApi from '../services/people-api.js';
import html from '../html.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`    
    <main>
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
                <input type="range" min="1" max="5"><br>
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
                <textarea name="summary" rows="3" cols="30"></textarea><br>
            <label>Insert a URL of a recent picture of yourself.</label>
                <input name="pic" type="text"><br>
            <label>What ladder number do you think you are?</label>
                <input type="range" min="1" max="5"><br>
        </form>
    </main>`;

};

export default class App {
    constructor() {
        this.people = peopleApi.get();
    }

    render() {
        console.log('hello');
        // console.log(this.people[0]);

        let dom = template();
        console.log('dom', dom);
        return dom;
    }
}