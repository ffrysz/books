const select = {
    templateOf: {
        book: '#template-book',
    },
    booklist: '.books-list',
    book: {
        image: '.book-image',
    },
};

const classNames = {
    imageFavourite: 'favourite',
};

const templates = {
    book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
};

const favouriteBooks = [];

const dom = {
    booklist: document.querySelector(select.booklist),
    bookImages: ' ',
};

function render(books) {
    for (const book of books) {
        const generatedHTML = templates.book(book);
        const generatedDOM = utils.createDOMFromHTML(generatedHTML);
        //console.log(generatedDOM);
        //const booklist = document.querySelector(select.booklist);
        dom.booklist.appendChild(generatedDOM);
        dom.bookImages = document.querySelectorAll(select.book.image);
    }
}

function initActions() {
    for (let a of dom.bookImages) {
        a.addEventListener('dblclick', function (event) {
            console.log(a);
            event.preventDefault();
            const attribute = a.getAttribute('data-id');
            if (favouriteBooks.includes(attribute)) {
                a.classList.remove(classNames.imageFavourite);
                const index = favouriteBooks.indexOf(attribute);
                favouriteBooks.splice(index, 1);
            } else {
                a.classList.add(classNames.imageFavourite);
                favouriteBooks.push(attribute);
            }
            console.log(favouriteBooks);
        });
    }

}

render(dataSource.books);
initActions();