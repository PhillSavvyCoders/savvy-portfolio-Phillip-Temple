var userName = prompt('What is your name') || 'Anonymous User';

var title = document.querySelector('h1');

var greet = function greet(){
    if(!userName){
        userName = prompt('What is your name Please');

        greet();
    }
    else{
        title.textContent += ', ' + userName;
    }
};

greet();

/*


for(var i = 1; i <= 100; i++){
    var output = '';

    if(i % 3 == 0){
 output += 'Fizz'; 
}
    if(i % 5 == 0){
 output += 'Buzz'; 
}
    if(output == ''){
 output = i; 
}
    console.log(output);
}




if(testNumber % 5 === 0 && testNumber % 3 === 0){
    alert('FizzBuzz');
}
 else if(testNumber % 5 === 0){
    alert('Fizz');
}
 else if(testNumber % 3 === 0){
    alert('Buzz');
}
 else{
    alert(testNumber);
}

document.querySelector('h1').textContent = 'Trump slams Chief Justice Roberts, "Your Momma ..."'

document.querySelectorAll('h1')["0"].style.color = 'pink'