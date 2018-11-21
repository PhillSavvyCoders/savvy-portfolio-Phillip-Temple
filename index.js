/*

var userName = prompt('What is your name');

var greet = function greet(){
    if(!userName){
        userName = prompt('What is your name Please');

        greet();
    }
    else{
        alert('Hello' + userName);
    }
};

greet();
*/

var name = prompt('What is your name');

// eslint-disable-next-line func-names
var checkName = function(){
    if(name === ''){
        name = prompt('What is your name, for real this time?');
        
        checkName();
    }
};

checkName();

alert('Hello ' + name);