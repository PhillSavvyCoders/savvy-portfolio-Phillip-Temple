import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';

var links;
var State = {
    'active': 'home',
    'home': {
        'title': "Phill's Savvy Coders Portfolio Projects"
    },
    'Blog': {
        'title': "Phill's Blog Projects"
    },
    'Content': {
        'title': "Phill's Contacts"
    },
    'Projects': {
        'title': "Phill's Awesame Projects"
    },
};
var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();
   

    State.active = event.target.textContent;

    render(State); //eslint-disable-line
}
function render(state){
    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    greet();

    links = document.querySelectorAll('#navigation a');


    links[0].addEventListener(
        'click',
        handleNavigation
    );

    links[1].addEventListener(
        'click',
        handleNavigation
    );

    links[2].addEventListener(
        'click',
        handleNavigation
    );
}

render(State);