import Footer from './src/Footer';
import Content from './src/Content';
import Header from './src/Header';
import Navigation from './src/Navigation';


document.querySelector('#root').innerHTML = `
    ${Content}
    ${Footer}
    ${Header}
    ${Navigation}
    `;


// var title = document.querySelector('h1');


// var greet = function greet(){
//  if(!userName){
//    userName = prompt('What is your name Please');
//
// greet();
// }
// else{
//   title.textContent += `, + ${userName}`;
// }
// };

// greet();

// var userName = prompt('What is your name') || 'Anonymous User';