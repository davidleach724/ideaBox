//queryselectors
//inputs
var inputTitle = document.querySelector('#userTitle');
var inputDescription = document.querySelector('#userBody');
var ideaBox = document.querySelector('.container-top');
var ideaCard = document.querySelector('#ideaCard');

//buttons
var buttonSave = document.querySelector('#saveButton');


//event listeners
buttonSave.addEventListener('click', function(event) {
  generateIdeaCard(event);
});
ideaBox.addEventListener('keyup', buttonValidity);

//global variables
var ideaCardList = [];

//functions
function buttonValidity() {
  if(!inputTitle.value || !inputDescription.value) {
    buttonSave.disabled = true;
  } else if (inputTitle.value && inputDescription.value) {
    buttonSave.classList.add('save-button-2');
    buttonSave.disabled = false;
  }
}

function generateIdeaCard(event) {
  event.preventDefault();

  var newCard = new Idea(inputTitle.value, inputDescription.value);
  ideaCardList.push(newCard);

  renderIdeaCard();
  clearInputFields();
}

function renderIdeaCard() {

  ideaCard.innerHTML = '';

  for(var i=0; i < ideaCardList.length; i++) {
  ideaCard.innerHTML += `<article id="${ideaCardList[i].id}" class="idea-card">
    <nav class="idea-nav">
      <img class="card-icon" src="assets/star-active.svg" alt="favorite idea star">
      <img class="card-icon" src="assets/delete.svg" alt="delete idea icon">
    </nav>
    <div class="idea-content">
      <h2 class="idea-title">${ideaCardList[i].title}</h2>
      <p class="idea-body">${ideaCardList[i].body}</p>
    </div>
    <footer class="idea-comment">
      <img class="card-icon" src="assets/comment.svg" alt="add comment button">
      <label>Comment</label>
    </footer>
  </article>`;
  }
}

function clearInputFields() {
  inputTitle.value = '';
  inputDescription.value = '';
  buttonSave.classList.remove('save-button-2');

  buttonValidity();
}


/* Pseudocode
Task 1:
-User enters information in the Title and Body fields
-User clicks 'save button' and generates 'idea card' in the 'idea list'
-Create global variable to store object instances called 'ideaCards'
-Create qs for title, body, and saveButton
-Add eventListener on saveButton('click')
-build function generateIdeaCard()
-display somehow an instance of our idea to the user and update the idea cards array
-create function updateIdeaSection
-create instatiation of Idea (push user values) and push to global array variable

Task 2:
-After user clicks save button and after task1 is initiated successfully, the title and body input fields are cleared out
-add a function add the end of generateIdeaCard() that resets the values of the input fields
- set values of the input variables (ex title.value = '') (look into .reset if problems come up)
-if there is an error checking function, this will be placed AFTER

Task 3:
-If title and body are empty then the save button should be..
---a lighter color and be disabled
---the cursor is not a pointer when the user hovers over it
---create class that includes CSS for no cursor and lighter color button
---disable button or click event, etc.

Task 4:
- Should not see the page reload?


Edge cases
- verify the 'title' and 'body' have information
--- error checking function will have a return to prevent additional methods from firing
*/
