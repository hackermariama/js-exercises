/*
Task 1
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

 var changeColorB =document.querySelector('#bgrChangeBtn');
 changeColorB.addEventListener('click' ,changeColor );

 function changeColor(){
  var myColor = document.querySelector('body');
  myColor.style.backgroundColor='pink';
 }
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
var addButton = document.querySelector('#alertBtn');
    addButton.addEventListener("click", alertMessage);

    function alertMessage() {
        alert("Thanks for visiting Bikes for Refugees !");}


/*
Task 3
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
var addTextB=document.querySelector("#addTextBtn");
addTextB.addEventListener("click",newParagraph);

function newParagraph(){
  var newParagraph=document.createElement('p');
  var buttonContainer=document.querySelector(".jumbotron");
  buttonContainer.appendChild(newParagraph);
  newParagraph.innerText="Read more below";
}




/*
Task 4
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

var largelinksBtn=document.querySelector('#largerLinksBtn');
var allLinks=document.querySelectorAll('a');
largerLinksBtn.addEventListener('click',changeLinksSize);

function changeLinksSize(){
  allLinks.forEach(links=>links.style.fontSize='2em');

}