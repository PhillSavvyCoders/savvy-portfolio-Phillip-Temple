import Content from './src/Content';
import Footer from './src/Footer';
import greet from './src/Greeting';
import Header from './src/Header';
import Navigation from './src/Navigation';
import Navigo from 'navigo';
import { capitalize } from 'lodash';


var router = new Navigo(window.location.origin);

var State = {
    'active': 'Home',
    'Home': {
        'title': "Phill's Savvy Coders Portfolio Projects",
        'links': [ 'Blog', 'Contact', 'Project' ]
    },
    'Blog': {
        'title': "Phill's Blog Projects",
        'links': [ 'Home', 'Contact', 'Project' ]
    },
    'Contact': {
        'title': "Phill's Contacts",
        'links': [ 'Home', 'Blog', 'Project' ]
    },
    'Project': {
        'title': "Phill's Awesame Projects",
        'links': [ 'Home', 'Blog', 'Contact' ]
    }
};
var root = document.querySelector('#root');

function handleNavigation(params){
    State.active = capitalize(params.page);

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

    router.updatePageLinks();
}


router
    .on('/:page', handleNavigation)
    .on('/',() => handleNavigation({ 'page': 'Home' }))
    .resolve();