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