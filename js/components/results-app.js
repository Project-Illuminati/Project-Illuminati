'use strict';

import html from '/js/html.js';
import peopleApi from '../services/people-api.js';
// import Header from './header.js';
// import Footer from './footer.js';

let template = function() {
    return html`
    <main>

    </main>
    `;
};

// prints results data to screen
export default class App {

    constructor() {
        this.people = peopleApi.get();
    }

    render() {
        let dom = template();
        let chooser = this.people[this.people.length - 1];

        // let bioSet = new Set(chooser.bio_picks);
        // console.log(bioSet);
        // let uniqueBioPicks = Array.from(bioSet);

        // let picSet = new Set(chooser.pic_picks);
        // let uniquePicPicks = Array.from(picSet);

        //console.log('Are we good?', uniqueBioPicks, uniquePicPicks);

        let matches = [];
        for(let i = 0 ; i < chooser.bio_picks.length; i++){
            let suitorName = chooser.bio_picks[i].name;
            for(let j = 0; j < chooser.pic_picks.length; j++){
                if(suitorName === chooser.pic_picks[j].name && !matches.includes(suitorName)){
                    matches.push(suitorName);
                }
            }
        }
        console.log(matches);


        // // append header
        // this.main = dom.querySelector('main');
        // let header = new Header();
        // this.main.appendChild(header.render());

        // // append footer
        // let footer = new Footer();
        // this.main.appendChild(footer.render());

        // get product data from local storage




        return dom;
    }
}