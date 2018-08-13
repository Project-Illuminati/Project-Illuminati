import html from '/js/html.js';

let template = function() {
    return html`
    <header>
        <ul>
            <li class="center"><a href="about.html">Project Illuminati</a></li>
            <li class="right"><a href="about.html">About Us</a></li>
        </ul>
    </header>
   `;
};

export default class Header {
    constructor(props) {

    }

    render() {
        let dom = template();
        return dom;
    }
}