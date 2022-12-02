function createLibrary(libraryName) {
  var library = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  };
  return library
};

function addBook(library, book) {
  library["shelves"][book.genre].push(book)
}

function checkoutBook(library, bookTitle, genre) {
  var shelfName = library["shelves"][genre]
  for (i = 0; i < shelfName.length; i++) {
    if (bookTitle === shelfName[i].title) {
      shelfName.splice(i, 1)
      return `You have now checked out ${bookTitle} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};