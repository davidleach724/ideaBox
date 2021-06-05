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
      <img class="card-icon" id="favoriteIcon" src="${ideaCardList[i].image}" alt="favorite idea star">
      <img class="card-icon" id="deleteIcon" src="assets/delete.svg" alt="delete idea icon">
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

ideaCard.addEventListener('click', function(event) {
  favoriteIdeaCard(event);
  deleteIdeaCard(event);
});

function deleteIdeaCard(event) {
  var closestIdea = event.target.closest('article');
  if (event.target.id === 'deleteIcon') {
    for (var i = 0; i < ideaCardList.length; i++) {
      if (ideaCardList[i].id === Number(closestIdea.id)) {
        ideaCardList.splice(i, 1);
      }
    }
  }
  renderIdeaCard();
}

function favoriteIdeaCard(event) {
  var closestIdea = event.target.closest('article');
  if (event.target.id === 'favoriteIcon');
    for (var i = 0; i < ideaCardList.length; i++) {
      if (ideaCardList[i].id === Number(closestIdea.id)) {
        console.log('where you', ideaCardList[i]);
        ideaCardList[i].updateIdea();
      }
    }
}

// task1 >> when user clicks delete button on idea card, the card is permanently removed from view
  // add addEventListener 'click' on ideaCard
  // create a function deleteIdeaCard
    // target the delete icon img
    // if clicked, remove card
      // loop through ideaCardList
      // if ID is the target, splice that shit
    // then update the DOM, call renderIdeaCard() ?


// task 2 >> when user clicks star button on the idea card, if outlined/not favorited, button is not filled/favorited
  // create a function updateFavorites() // updateIdea
    // target the favorites icon img
    // if clicked, change img
      // this.star is now true
      // src assigned to other img

// task 3 >> when user clicks star button on the idea card, if filled/favorited, button is now outlined/not favorited
  // potentially toggle() ???

// task 4>> can't see page reload





/*
Edge cases
- verify the 'title' and 'body' have information
--- error checking function will have a return to prevent additional methods from firing
*/
