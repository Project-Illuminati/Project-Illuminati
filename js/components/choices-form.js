import html from '../html.js';
import Bio from './bio.js';
import Pic from './pic.js';

// creates the html that displays the "form" that allows user to choose bios and pictures
let template = function() {
    return html`
    <div class="form-contents"> 
        <p class="message">Click to select bios of interest.</p>   
        <div class="outer-choice-form">
            <div class="choice-form"></div>
            <label><button class="done">Submit</button></label>
        </div>
    </div>
    `;
};

export default class ChoicesForm {
    constructor(props) {
        this.handleDone = props.handleDone;
        this.suitors = props.suitors;
        this.chooser = props.person;
        // use component state to track where you are.
        this.biosComplete = false;
    }

    // this might be a bit beyond where you are at to pass in Component class dynamically,
    // but good example of encapsulating same thing being done twice
    renderChoices(collection, ChildComponent) {

        for(let i = 0; i < this.suitors.length; i++) {
            let suitor = new ChildComponent({
                person: this.suitors[i],
                onSelect: suitor => {
                    collection.push(suitor);
                },
                onUnselect: suitor => {
                    // this is okay! (But doesn't work as well with a single function)
                    // this.chooser.bio_picks = this.chooser.bio_picks.filter(person => person !== suitor);

                    // can also use:
                    let index = collection.indexOf(suitor);
                    if(index !== -1) {
                        collection.splice(index, 1);
                    }
                }
            });

            this.form.appendChild(suitor.render());
        }
    }

    clearForm() {
        while(this.form.lastElementChild){
            this.form.lastElementChild.remove();
        }
    }

    render() {
        let dom = template();

        // first display the user bios
        this.form = dom.querySelector('div.choice-form');
        let message = dom.querySelector('p.message');

        this.renderChoices(this.chooser.bio_picks, Bio);

        // when the user has finished selecting bios, update the page to display pics instead
        let button = dom.querySelector('button.done');
        button.addEventListener('click', () => {
            if(this.biosComplete) {
                // now we are done-done, so let app know!
                this.handleDone();
                return;
            }
            button.value = 'Show me my matches!';

            // mark that bios are complete
            this.biosComplete = true;

            // Don't do this. It's a footgun to try and circumvent the component tree
            // let message = document.getElementsByClassName('intro-message')[0];
            // In this case, modify design so this component can update
            message.textContent = 'Now choose pictures of celebs in your ladder range.';

            this.clearForm();
            this.renderChoices(this.chooser.pic_picks, Pic);
        });

        return dom;

    }
}