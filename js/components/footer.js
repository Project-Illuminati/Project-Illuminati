import html from '/js/html.js';

let template = function() {
    return html`
    <footer>
        <img src="css/facebook-wrap.png" class="social-icon"><img src="css/twitter-wrap.png" class="social-icon">
    </footer>
   `;
};

export default class Footer {
    constructor(props) {

    }

    render() {
        let dom = template();
        return dom;
    }
}