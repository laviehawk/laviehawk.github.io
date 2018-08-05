var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/joanna_ryder_by_sharandula.png') {
      myImage.setAttribute ('src','images/silence_is_gold_by_sharandula.png');
    } else {
      myImage.setAttribute ('src','images/joanna_ryder_by_sharandula.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {

    myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name');
  }

  myButton.onclick = function() {
    setUserName();
  }