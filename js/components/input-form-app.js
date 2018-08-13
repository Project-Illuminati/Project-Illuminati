'use strict';

import peopleApi from '../services/people-api.js';
// import html from '/js/html.js';
// import Header from './header.js';
// import Footer from './footer.js';

export default class App {
    constructor() {
        this.people = peopleApi.get();
    }
    render() {
        console.log(this.people);
    }
}