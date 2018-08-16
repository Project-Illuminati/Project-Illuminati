'use strict';

import html from '../html.js';
// import Header from './header.js';
// import Footer from './footer.js';

// let template = function() {
//     return html`    
//     <form>
//         <label>Name:</label>
//             <input name="name" type="text"><br>
//         <label>Income</label>
//             <select id="income">
//                 <option value="0-50K">0 - 50K</option>
//                 <option value="50-100K">50 - 100K</option>
//                 <option value="100-150K">100 - 150K</option>
//                 <option value="150-200K">150 - 200K</option>
//                 <option value="200K+">200K+</option>
//             </select><br>
//         <label>Fertility</label>
//             <input type ="range" max="5" min="1"
//             oninput="document.getElementById('fertilityRangeLabel').innerHTML = this.value;"
//             step="1" name="rangeVal" id="fertility" value="3">
//             </input>
//             <em id="fertilityRangeLabel" style="font-style: normal;"></em>
//             <br>
//         <label>Favorite Book</label>
//             <select id="book">
//                 <option value="If I Did It by OJ Simpson">If I Did It by OJ Simpson</option>
//                 <option value="Awaken the Giant Within by Tony Robbins">Awaken the Giant Within by Tony Robbins</option>
//                 <option value="Atlas Shrugged by Ayn Rand">Atlas Shrugged by Ayn Rand</option>
//                 <option value="The Bible by God">The Bible by God</option>
//                 <option value="Leaves of Grass by Walt Whitman">Leaves of Grass by Walt Whitman</option>
//                 <option value="An Inconvenient Truth by Al Gore">An Inconvenient Truth by Al Gore</option>
//             </select><br>
//         <label>How would your best friend describe you?</label>
//             <textarea name="bio" rows="3" cols="30"></textarea><br>
//         <label>Insert a URL of a recent picture of yourself.</label>
//             <input name="pic" type="text"><br> <br>
//         <label>What ladder number do you think you are?</label> <br>
//             <input type ="range" max="10" min="0"
//                 oninput="document.getElementById('rangeValLabel').innerHTML = this.value;"
//                 step="1" name="rangeVal" id="ladder_guess" value="5">
//             </input>
//             <em id="rangeValLabel" style="font-style: normal;"></em>
//             <br>
//         <input type="submit" onclick="window.location.href='../../choices-form.html'">
//     </form>`;

// };

let template = function() {
    return html`    
    <div class="formcontent">

        <form>
            <div class="form-contents">

                <div class="form-questions">
                <section class="input-container">
                    <fieldset>
                        <label>
                        Fill in the info below to find your celebrity matches.
                        </label>
                    </fieldset>
                </section>
                <section class="input-container">
                <fieldset>
                    <label>
                    <input type="text" placeholder="What is your name?" name="product_name">
                    </label>
                </fieldset>
            </section>
            <fieldset>
                <label> What is your income?</label>
                <input type="radio" name="radio1" id="radio-1" value="0-50K"/>
                <label for="radio-1">0-50K</label>

                <input type="radio" name="radio1" id="radio-2" value="radio-2" checked="checked"/>
                <label for="radio-2">50-100K</label>
                
                <input type="radio" name="radio1" id="radio-3" value="radio-3"/>
                <label for="radio-3">100-150K</label>

                <input type="radio" name="radio1" id="radio-4" value="radio-4"/>
                <label for="radio-3">150-200K</label>

                <input type="radio" name="radio1" id="radio-5" value="radio-5"/>
                <label for="radio-3">200K+</label>
            </fieldset>
            <section class="input-container">
                <fieldset>
                    <label> How fertile are you?</label>
                    <input type ="range" max="5" min="1"
                    oninput="document.getElementById('fertilityRangeLabel').innerHTML = this.value;"
                    step="1" name="rangeVal" id="fertility" value="3">
                    </input>
                    <em id="fertilityRangeLabel" style="font-style: normal;"></em>
                    <br>
                </fieldset>
            </section>
            <fieldset>
                <label> What is your favorite book?</label>
                <input type="radio" name="radio1" id="radio-1" value="0-50K"/>
                <label for="radio-1">If I Did It by OJ Simpson</label>

                <input type="radio" name="radio1" id="radio-2" value="radio-2" checked="checked"/>
                <label for="radio-2">Awaken the Giant Within by Tony Robbins</label>
                
                <input type="radio" name="radio1" id="radio-3" value="radio-3"/>
                <label for="radio-3">Atlas Shrugged by Ayn Rand</label>

                <input type="radio" name="radio1" id="radio-4" value="radio-4"/>
                <label for="radio-3">The Bible by God</label>

                <input type="radio" name="radio1" id="radio-5" value="radio-5"/>
                <label for="radio-3">Leaves of Grass by Walt Whitman</label>

                <input type="radio" name="radio1" id="radio-6" value="radio-6"/>
                <label for="radio-3">An Inconvenient Truth by Al Gore</label>
            </fieldset>
            <section class="input-container">
                <fieldset>
                    <label> 
                    <textarea placeholder="How would your best friend describe you?" name="bio" rows="3" cols="30"></textarea><br>
                    </label>
                </fieldset>
            </section>
            <section class="input-container">
                <fieldset>
                    <label> 
                    <input type="text" placeholder="Insert a URL of a recent picture of yourself." name="product_name">
                    </label>
                </fieldset>
            </section>
            <section class="input-container">
                <fieldset>
                    <label>What ladder number do you think you are?</label> <br>
                    <input type ="range" max="10" min="0"
                            oninput="document.getElementById('rangeValLabel').innerHTML = this.value;"
                            step="1" name="rangeVal" id="ladder_guess" value="5">
                    </input>
                    <em id="rangeValLabel" style="font-style: normal;"></em>
                    <br>
                </fieldset>
            </section>
                
                </div>
                <div class="button-container">
                    <input id="input-form-button" type="submit" onclick="window.location.href='../../choices-form.html'">
                </div>
            </div>
        </form>
    </div>`;

};

export default class ProfileInputForm {
    constructor(props) {
        this.people = props.people;
        this.onSubmit = props.onSubmit;
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

            let person = { name: name,
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
                this.onSubmit(person);
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