import { html } from 'lit-html';

export default function Footer(){
    return html`
<div id="footer">
<div class="container">
    <h3>Contact Information</h3>
    <ul>
        <li class="emphasis">
            <i class="fab fa-github"></i>
            GitHub <a href="https://github.com/pcortezt">pcortezt</a>
        </li>
        
        <li>
            <i class="fas fa-paper-plane"></i>
            Email: <a href="https://www.linkedin.com/in/phillip-temple-73689b173/">phillipcorteztemple@gmail.com</a>
        </li>
    </ul>
</div>
</div>
`;
}