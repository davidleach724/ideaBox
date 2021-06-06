//queryselectors
//inputs
var inputTitle = document.querySelector('#userTitle');
var inputDescription = document.querySelector('#userBody');
var inputSearchField = document.querySelector('#searchField')
var ideaBox = document.querySelector('.container-top');
var ideaCard = document.querySelector('#ideaCard');

//buttons
var buttonSave = document.querySelector('#saveButton');


//event listeners
buttonSave.addEventListener('click', function(event) {
  generateIdeaCard(event);
});

ideaBox.addEventListener('keyup', buttonValidity);

ideaCard.addEventListener('click', function(event) {
  favoriteIdeaCard(event);
  deleteIdeaCard(event);
});

inputSearchField.addEventListener('keyup', searchIdea);

//global variables
var ideaCardListMain = [];

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
  ideaCardListMain.push(newCard);

  renderIdeaCard(ideaCardListMain);
  clearInputFields();
}

function renderIdeaCard(cards) {

  ideaCard.innerHTML = '';

  for(var i=0; i < cards.length; i++) {
  ideaCard.innerHTML += `<article id="${cards[i].id}" class="idea-card">
    <nav class="idea-nav">
      <img class="card-icon" id="favoriteIcon" src="${cards[i].image}" alt="favorite idea star">
      <img class="card-icon" id="deleteIcon" src="assets/delete.svg" alt="delete idea icon">
    </nav>
    <div class="idea-content">
      <h2 class="idea-title">${cards[i].title}</h2>
      <p class="idea-body">${cards[i].body}</p>
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


function deleteIdeaCard(event) {
  var closestIdea = event.target.closest('article');
  if (event.target.id === 'deleteIcon') {
    for (var i = 0; i < ideaCardListMain.length; i++) {
      if (ideaCardListMain[i].id === Number(closestIdea.id)) {
        ideaCardListMain.splice(i, 1);
      }
    }
  }
  renderIdeaCard(ideaCardListMain);
}

function favoriteIdeaCard(event) {
  var closestIdea = event.target.closest('article');
  if (event.target.id === 'favoriteIcon') {
    for (var i = 0; i < ideaCardListMain.length; i++) {
      if (ideaCardListMain[i].id === Number(closestIdea.id)) {
        ideaCardListMain[i].updateIdea();
      }
    }
  }
}

function searchIdea() {
  var inputSearch = inputSearchField.value;
  var filteredIdeaCards = [];

  for (var i=0; i < ideaCardListMain.length; i++) {
    if(ideaCardListMain[i].title.includes(inputSearch) || ideaCardListMain[i].body.includes(inputSearch)) {
      filteredIdeaCards.push(ideaCardListMain[i]);
    }
  }
  renderIdeaCard(filteredIdeaCards);
}

/*
Edge cases
- verify the 'title' and 'body' have information
--- error checking function will have a return to prevent additional methods from firing
*/
