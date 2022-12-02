function shelfBook(book, shelfName) {
  if (shelfName.length <= 2) {
    shelfName.unshift(book)
  }
}

function unshelfBook(book, shelfName) {
  for (i = 0; i < shelfName.length; i++) {
    if (shelfName[i].title === book) {
      return shelfName.splice(i, 1)
    }
  }
}

function listTitles(shelfName) {
  var onShelf = []
  for (i = 0; i < shelfName.length; i++) {
    onShelf.push(shelfName[i].title)
  }
  return onShelf.join(", ")
}

function searchShelf(shelfName, name) {
  for (i = 0; i < shelfName.length; i++) {
    var book = []
    book.push(shelfName[i].title)
  }
  for (i = 0; i < shelfName.length; i++) {
    if (book.includes(name)) {
      return true
    } else {
      return false
    }
  }
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};