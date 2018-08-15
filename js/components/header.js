import html from '/js/html.js';

let template = function() {
    return html`
        <div class ="nav"> 
        <nav>  
            <span class="menu-toggle">Menu</span>
            <div class="menu-content">
                <div class="logo-left">
                    <a href="landing.html"><img class="logo" src="img/ladder2.png"></a>
                </div>
                <div class="aboutus-right">
                    <a href="about.html">About Us</a>
                </div>
            </div>
        </nav>
    </div>
   `;
};

export default class Header {

    render() {
        let dom = template();
        return dom;
    }
}