function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  var characterObject = {
    name: characterName,
    age: characterAge,
    pronouns: characterPronouns
  };
  return characterObject;
};

function saveReview(review, array1) {
  if (array1.includes(review) === false) {
    array1.push(review);
  };
};

function calculatePageCount(bookTitle) {
  return bookTitle.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    genre: genre,
    pageCount: calculatePageCount(bookTitle)
  };
  return book
};

function editBook(bookTitle) {
  bookTitle.pageCount = bookTitle.pageCount * .75
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}