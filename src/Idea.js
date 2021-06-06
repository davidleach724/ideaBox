class Idea {
  constructor(title, body) {
    this.id = Date.now();
    this.title = title;
    this.body = body;
    this.star = false;
    this.image = 'assets/star.svg';
  }

  saveToStorage() {
    var cardId = this.id;
    var cardDeets = JSON.stringify(this);
    localStorage.setItem(cardId, cardDeets);
  }

  deleteFromStorage() {

  }

  updateIdea() {
    if (this.star === false) {
      this.star = true;
      this.image = 'assets/star-active.svg'
    } else if (this.star === true) {
      this.star = false;
      this.image = 'assets/star.svg';
    }
    this.saveToStorage();
  }
}
