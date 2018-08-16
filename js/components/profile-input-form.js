'use strict';

import html from '../html.js';

let template = function() {
    return html`    
    <div class="formcontent">

        <form>
            <div class="form-contents">

                <div class="form-questions">
                <section class="input-container-first">
                    <label>
                    <h3>Fill in the info below to find your celebrity matches. </h3> <br><br>
                    </label>
                </section>
                <section class="input-container">
                    <label> <h3>1. Name </h3> 
                    <input type="text" placeholder="What is your name?" name="name">
                    </label>
            </section>

            <label> <h3 class="h3margin">2. What is your celebrity status? </h3> </label>
            <div class="radio-flex-income">

                <input type="radio" name="incomestatus" id="statusradio-1" value="Retired child star" checked/>
                <label class="radiolabel" for="statusradio-1">Retired child star</label>

                <input type="radio" name="incomestatus" id="statusradio-2" value="Infamous but really just misunderstood" />
                <label class="radiolabel" for="statusradio-2">Infamous but really just misunderstood</label>

                <input type="radio" name="incomestatus" id="statusradio-3" value="Super popular on the Hallmark Channel"/>
                <label class="radiolabel" for="statusradio-3">All press is good press</label>

                <input type="radio" name="incomestatus" id="statusradio-4" value="Multihyphenate Actor/Director/Producer/Musician"/>
                <label class="radiolabel" for="statusradio-4">Multihyphenate Actor/Director/Producer/Musician</label>

                <input type="radio" name="incomestatus" id="statusradio-5" value="Friends with Bono"/>
                <label class="radiolabel" for="statusradio-5">Friends with Bono</label>
            </div>

            <section class="input-container">
                    <label> <h3>3. How fertile are you? </h3></label>
                    <input type ="range" max="5" min="1"
                    oninput="document.getElementById('fertilityRangeLabel').innerHTML = this.value;"
                    step="1" name="rangeVal" id="fertility" value="3">
                    </input>
                    <em id="fertilityRangeLabel" style="font-style: normal;"></em>
                    <br>
            </section>

            <label> <h3 class="h3margin"> 4. What is your favorite book? </h3> </label>
            <div class="radio-flex-book">

            <input type="radio" name="book" id="bookradio-1" value="Atlas Shrugged by Ayn Rand" checked/>
            <label class="radiolabel" for="bookradio-1">Atlas Shrugged by Ayn Rand</label>

            <input type="radio" name="book" id="bookradio-2" value="An Inconvenient Truth by Al Gore"/>
            <label class="radiolabel" for="bookradio-2">An Inconvenient Truth by Al Gore</label>

            <input type="radio" name="book" id="bookradio-3" value="Awaken the Giant Within by Tony Robbins" >
            <label class="radiolabel" for="bookradio-3">Awaken the Giant Within by Tony Robbins</label>

            <input type="radio" name="book" id="bookradio-4" value="The Bible by God"/>
            <label class="radiolabel" for="bookradio-4">The Bible by God</label>

            <input type="radio" name="book" id="bookradio-5" value="If I Did It by OJ Simpson" />
            <label class="radiolabel" for="bookradio-5">If I Did It by OJ Simpson</label>

            <input type="radio" name="book" id="bookradio-6" value="The Boxcar Children"/>
            <label class="radiolabel" for="bookradio-6">The Boxcar Children</label>

            <input type="radio" name="book" id="bookradio-7" value="Leaves of Grass by Walt Whitman"/>
            <label class="radiolabel" for="bookradio-7">Leaves of Grass by Walt Whitman</label>
            </div>

            <section class="input-container">
                    <label> <h3> 5. How would your celebrity best friend describe you? </h3>
                    <textarea id="textarea" placeholder="Insert bio." name="bio" rows="3" cols="30"></textarea><br>
                    </label>
            </section>
            <section class="input-container">
                    <label> <h3> 6. Picture </h3>
                    <input type="text" placeholder="Insert a URL of a recent picture of yourself." name="pic">
                    </label>
            </section>
            <section class="input-container">
                    <label><h3> 7. What ladder number do you <em> think </em> you are?</h3></label> <br>
                    <input type ="range" max="10" min="0"
                            oninput="document.getElementById('rangeValLabel').innerHTML = this.value;"
                            step="1" name="rangeVal" id="ladder_guess" value="5">
                    </input>
                    <em id="rangeValLabel" style="font-style: normal;"></em>
                    <br>
            </section>
                

              
              </div>



                </div>
                <div class="input-button-container">
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
            let income = elements.incomestatus.value;
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