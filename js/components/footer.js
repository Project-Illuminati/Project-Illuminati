import html from '../html.js';

let template = function() {
    return html`
    <footer class="footer">
        <a href="http://www.facebook.com"><img src="img/facebook.png" class="social-icon"></a>
        <a href="http://www.twitter.com"><img src="img/twitter.png" class="social-icon"></a>
        <a href="http://www.instagram.com"><img src="img/instagram.png" class="social-icon"></a>
    </footer>
   `;
};

export default class Footer {

    render() {
        let dom = template();
        return dom;
    }
}