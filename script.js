/* Declare variables below to save the different sections (divs) of your story*/
let storyOpening = document.querySelector('.story-opening');
let optionOneScreen = document.querySelector('.option-one-screen');
let optionOneEnd = document.querySelector('.option-one-end');
let optionTwoScreen = document.querySelector('.option-two-screen');
let optionTwoEnd = document.querySelector('.option-two-end');
let buttons = document.querySelector('.buttons');
let button1 = document.querySelector('.option-one');
let button2 = document.querySelector('.option-two');
let button3 = document.querySelector('.option-three');
let button4 = document.querySelector('.option-four');
let button5 = document.querySelector('.option-five');
let button6 = document.querySelector('.option-six');
let TheEnd =  document.querySelector('.the-end');




// When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
button1.onclick = function(){
  storyOpening.style.display = 'none';
  optionOneScreen.style.display = 'block';
  buttons.style.display = 'none';
   TheEnd.style.display = 'none';
}

button2.onclick = function(){
  storyOpening.style.display = 'none';
  optionTwoScreen.style.display = 'block';
  buttons.style.display = 'none';
   TheEnd.style.display = 'none';
}


  button3.onclick = function(){
    storyOpening.style.display = 'none';
    optionOneScreen.style.display = 'none';
    optionOneEnd.style.display = 'block';
    buttons.style.display = 'none';
     TheEnd.style.display = 'none';
  
}

button4.onclick = function(){
    storyOpening.style.display = 'none';
    optionTwoScreen.style.display = 'none';
    optionTwoEnd.style.display = 'block';
    buttons.style.display = 'none';
    TheEnd.style.display = 'none';
  
}

button5.onclick = function(){
    storyOpening.style.display = 'none';
    optionTwoScreen.style.display = 'none';
    optionTwoEnd.style.display = 'none';
    buttons.style.display = 'none';
    TheEnd.style.display = 'block';
  
}


button6.onclick = function(){
    storyOpening.style.display = 'none';
    optionOneScreen.style.display = 'none';
    optionOneEnd.style.display = 'none';
    buttons.style.display = 'none';
    TheEnd.style.display = 'block';
  
}

//
