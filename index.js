import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import { link } from 'fs';

var links;
var State = {
    'active': 'home',
    'home': {
        'title': "Phill's Savvy Coders Portfolio Projects",
        'links': [ 'Blog', 'Contact', 'Project' ]
    },
    'Blog': {
        'title': "Phill's Blog Projects",
        'links': [ 'home', 'Contact', 'Project' ]
    },
    'Contact': {
        'title': "Phill's Contacts",
        'links': [ 'home', 'Blog', 'Project' ]
    },
    'Projects': {
        'title': "Phill's Awesame Projects",
        'links': [ 'home', 'Blog', 'Contact' ]
    },
};
var root = document.querySelector('#root');

function handleNavigation(event){
    event.preventDefault();
   

    State.active = event.target.textContent;

    render(State); //eslint-disable-line
}
function render(state){
    var links;

    root.innerHTML = `
    ${Navigation(state)}
    ${Header(state)}
    ${Content(state)}
    ${Footer(state)}
`;

    greet();

    links = document.querySelectorAll('#navigation a');
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener(
            'click',
            handleNavigation
        );
    }
}


render(State);