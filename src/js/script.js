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
/*
const dom = {
	booklist: document.querySelector(select.booklist),
	bookImages: ' ',
	filterForm: document.querySelector(select.form),
};

function render(books) {
	for (const book of books) {
		book.ratingBgc = determineRatingBgc(book.rating);
		book.ratingWidth = book.rating * 10;
		const generatedHTML = templates.book(book);
		const generatedDOM = utils.createDOMFromHTML(generatedHTML);
		//console.log(generatedDOM);
		//const booklist = document.querySelector(select.booklist);
		dom.booklist.appendChild(generatedDOM);
	}
	dom.bookImages = document.querySelectorAll(select.book.image);
	console.log(books);
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
/*
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
		if ((event.target.type === 'checkbox') &&
			(event.target.name === 'filter') &&
			(event.target.tagName === 'INPUT')) {
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
		const idSelector = '[data__id=' + '"' + book.id + '"' + ']';
		//const hiddenBook = dom.booklist.querySelector(idSelector);
		const hiddenBook = dom.bookImages[book.id - 1];
		console.log(dom.bookImages);
		console.log(idSelector);
		console.log('TEST');

		for (const filter of filters) {
			console.log(book.details[filter]);
			if (!book.details[filter]) {
				shouldBeHidden = true;
				break;
			}
		}
		/*if (shouldBeHidden) {
			hiddenBook.classList.add(classNames.imageHidden);
		} else if (!shouldBeHidden) {
			hiddenBook.classList.remove(classNames.imageHidden);
		}*/
/*
		hiddenBook.classList[shouldBeHidden ? 'add' : 'remove'](classNames.imageHidden);
	}
}

function determineRatingBgc(rating) {
	if (rating <= 6) {
		return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
	}
	if (rating > 6 && rating <= 8) {
		return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
	}
	if (rating > 8 && rating <= 9) {
		return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
	}
	if (rating > 9) {
		return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
	}
}

render(dataSource.books);
initActions();
*/
/*--------------------------------------------------------------------------------------------------*/

class BooksList {
	constructor(books) {
		const thisBook = this;
		thisBook.dom = {};
		thisBook.dom.booklist = document.querySelector(select.booklist);
		thisBook.render(books);
		thisBook.getElements();
		thisBook.initActions();
	}

	render(books) {
		const thisBook = this;
		for (const book of books) {
			book.ratingBgc = thisBook.determineRatingBgc(book.rating);
			book.ratingWidth = book.rating * 10;
			const generatedHTML = templates.book(book);
			const generatedDOM = utils.createDOMFromHTML(generatedHTML);
			//thisBook.getElements();
			thisBook.dom.booklist.appendChild(generatedDOM);
		}
		//dom.bookImages = document.querySelectorAll(select.book.image);
		//console.log(books);
	}

	getElements() {
		const thisBook = this;
		thisBook.dom.bookImages = document.querySelectorAll(select.book.image);
		thisBook.dom.filterForm = document.querySelector(select.form);
	}

	initActions() {
		const thisBook = this;
		thisBook.dom.booklist.addEventListener('dblclick', function (event) {
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
		thisBook.dom.filterForm.addEventListener('click', function (event) {
			if ((event.target.type === 'checkbox') &&
				(event.target.name === 'filter') &&
				(event.target.tagName === 'INPUT')) {
				if (event.target.checked) {
					filters.push(event.target.value);
				} else {
					const index = filters.indexOf(event.target.value);
					filters.splice(index, 1);
				}
				thisBook.filter();
			}
			//console.log(filters);
		});

	}

	filter() {
		const thisBook = this;
		//console.log(thisBook.dom.bookImages);
		for (const book of dataSource.books) {
			let shouldBeHidden = false;
			const idSelector = '[data__id=' + '"' + book.id + '"' + ']';
			//const hiddenBook = dom.booklist.querySelector(idSelector);
			const hiddenBook = thisBook.dom.bookImages[book.id - 1];
			//console.log(dom.bookImages);
			//console.log(idSelector);
			//console.log('TEST');

			for (const filter of filters) {
				//console.log(book.details[filter]);
				if (!book.details[filter]) {
					shouldBeHidden = true;
					break;
				}
			}
			/*if (shouldBeHidden) {
				hiddenBook.classList.add(classNames.imageHidden);
			} else if (!shouldBeHidden) {
				hiddenBook.classList.remove(classNames.imageHidden);
			}*/
			hiddenBook.classList[shouldBeHidden ? 'add' : 'remove'](classNames.imageHidden);
		}
	}

	determineRatingBgc(rating) {
		if (rating <= 6) {
			return 'linear-gradient(to bottom,  #fefcea 0%, #f1da36 100%)';
		}
		if (rating > 6 && rating <= 8) {
			return 'linear-gradient(to bottom, #b4df5b 0%,#b4df5b 100%)';
		}
		if (rating > 8 && rating <= 9) {
			return 'linear-gradient(to bottom, #299a0b 0%, #299a0b 100%)';
		}
		if (rating > 9) {
			return 'linear-gradient(to bottom, #ff0084 0%,#ff0084 100%)';
		}
	}
}


const app = new BooksList(dataSource.books);