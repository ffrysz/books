const select = {
	templateOf: {
		book: '#template-book',
	},
	booklist: '.books-list',
	book: {
		image: '.book__image',
	},
	form: '.filters form',
};

const classNames = {
	imageFavourite: 'favourite',
	imageHidden: 'hidden',
};

const templates = {
	book: Handlebars.compile(document.querySelector(select.templateOf.book).innerHTML),
};

const favouriteBooks = [];
const filters = [];

const dom = {
	booklist: document.querySelector(select.booklist),
	bookImages: ' ',
	filterForm: document.querySelector(select.form),
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

/*function initActions() {
	for (let a of dom.bookImages) {
		a.addEventListener('dblclick', function (event) {
			console.log(event);
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

}*/

function initActions() {
	dom.booklist.addEventListener('dblclick', function (event) {
		//console.log(event.target.offsetParent);
		event.preventDefault();
		const parent = event.target.offsetParent;
		const attribute = parent.getAttribute('data__id');
		if (parent.classList.contains('book__image')) {
			if (favouriteBooks.includes(attribute)) {
				parent.classList.remove(classNames.imageFavourite);
				const index = favouriteBooks.indexOf(attribute);
				favouriteBooks.splice(index, 1);
			} else {
				parent.classList.add(classNames.imageFavourite);
				favouriteBooks.push(attribute);
			}
			console.log(favouriteBooks);
		}
	});
	dom.filterForm.addEventListener('click', function (event) {
		if ((event.target.type = "checkbox") &&
			(event.target.name = "filter") &&
			(event.target.tagName = "input")) {
			if (event.target.checked) {
				filters.push(event.target.value);
			} else {
				const index = filters.indexOf(event.target.value);
				filters.splice(index, 1);
			}
			filter();
		}
		console.log(filters);
	});
}

function filter() {

	for (const book of dataSource.books) {
		let shouldBeHidden = false;
		for (const filter of filters) {
			console.log(book.details[filter]);
			if (!book.details[filter]) {
				shouldBeHidden = true;
				break;
			}
		}
		if (shouldBeHidden) {
			const id = book.id;
			const hiddenBook = document.querySelector(select.book.image[data__id = id]);
			console.log(hiddenBook);
		}
	}
};

render(dataSource.books);
initActions();