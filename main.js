
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Samoed1.jpg') {
      myImage.setAttribute ('src','images/Samoed2.jpg');
    } else {
      myImage.setAttribute ('src','images/Samoed1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Пожалуйста напишите своё имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Самоеды, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Самоеды, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
