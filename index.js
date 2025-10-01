function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => renderBooks(books));
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const p = document.createElement("p");
    p.textContent = book.name;
    main.appendChild(p);
  });
}
