import html from '/js/html.js';

let template = function() {
    return html`
    <footer class="footer">
        <img src="img/facebook.png" class="social-icon"><img src="img/twitter.png" class="social-icon"><img src="img/instagram.png" class="social-icon">
    </footer>
   `;
};

export default class Footer {

    render() {
        let dom = template();
        return dom;
    }
}