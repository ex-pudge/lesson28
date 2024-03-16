function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.available = true;
    this.ratings = [];
    this.addRating = function(rating) {
        if (!this.available) {
            this.ratings.push(rating);
            console.log("Рейтинг для книги \"" + this.title + "\" успішно доданий користувачем.");
        } else {
            console.log("Неможливо поставити оцінку для книги, яка не була позичена.");
        }
    };
    this.getAverageRating = function() {
        if (this.ratings.length === 0) {
            return "Оцінок ще немає.";
        } else {
            const sum = this.ratings.reduce((acc, curr) => acc + curr);
            return sum / this.ratings.length;
        }
    };
    this.toggleAvailability = function() {
        this.available = !this.available;
    };
}
function Library() {
    this.books = [];
    this.addBook = function(title, author, year) {
        const book = new Book(title, author, year);
        this.books.push(book);
        console.log('Книга "' + title + '" додана до бібліотеки.');
    };
    this.findBooksByAuthor = function(author) {
        return this.books.filter(book => book.author === author);
    };
    this.listAvailableBooks = function() {
        return this.books.filter(book => book.available);
    };
}
function User(name) {
    this.name = name;
    this.borrowedBooks = [];
    this.borrowBook = function(book) {
        if (book.available) {
            book.toggleAvailability();
            this.borrowedBooks.push(book);
            console.log('Книга "' + book.title + '" успішно взята користувачем ' + this.name + '.');
        } else {
            console.log('Книга "' + book.title + '" зараз недоступна.');
        }
    };
    this.returnBook = function(book) {
        if (this.borrowedBooks.includes(book)) {
            book.toggleAvailability();
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
            console.log('Книга "' + book.title + '" успішно повернена користувачем ' + this.name + '.');
        } else {
            console.log('Користувач ' + this.name + ' не позичав книгу "' + book.title + '".');
        }
    };
    this.addRatingToBook = function(book, rating) {
        if (!book.available) {
            book.addRating(rating);
        } else {
            console.log('Неможливо поставити оцінку для книги, яка не була позичена.');
        }
    };
}
const library = new Library();
library.addBook("Мастер и Маргарита", "Булгаков", 1967);
library.addBook("Собачье сердце", "Булгаков", 1925);
library.addBook("Белая гвардия", "Булгаков", 1925);
library.addBook("Морфий", "Булгаков", 1925);
library.addBook("Белый Бим Чёрное ухо", "Гавриил Троепольский",  1971 );
library.addBook("федько халамидник", " Володимира Винниченка", 1911);
const user = new User("Ліза");
const availableBooks = library.listAvailableBooks();
if (availableBooks.length > 0) {
    const bookToBorrow = availableBooks[0];
    user.borrowBook(bookToBorrow);
    user.addRatingToBook(bookToBorrow, 5);
    user.returnBook(bookToBorrow);
    const averageRating = bookToBorrow.getAverageRating();
    console.log("Середній рейтинг книги:", averageRating);
} else {
    console.log("У бібліотеці немає доступних книг.");
}
const user2 = new User("Влад");
if (availableBooks.length > 0) {
    const bookToBorrow = availableBooks[3];
    user2.borrowBook(bookToBorrow);
    user2.addRatingToBook(bookToBorrow, 4); 
    user2.returnBook(bookToBorrow); 
    const averageRating = bookToBorrow.getAverageRating();
    console.log("Середній рейтинг книги:", averageRating);
} else {
    console.log("У бібліотеці немає доступних книг.");
}
const user3 = new User("Вова");
if (availableBooks.length > 0) {
    const bookToBorrow = availableBooks[3];
    user3.borrowBook(bookToBorrow);
    user3.addRatingToBook(bookToBorrow, 8); 
    user3.returnBook(bookToBorrow);
    const averageRating = bookToBorrow.getAverageRating();
    console.log("Середній рейтинг книги:", averageRating);
} else {
    console.log("У бібліотеці немає доступних книг.");
}
const user4 = new User("Лілія");
if (availableBooks.length > 0) {
    const bookToBorrow = availableBooks[0];
    user4.borrowBook(bookToBorrow);
    user4.addRatingToBook(bookToBorrow, 8); 
    user4.returnBook(bookToBorrow);
    const averageRating = bookToBorrow.getAverageRating();
    console.log("Середній рейтинг книги:", averageRating);
} else {
    console.log("У бібліотеці немає доступних книг.");
}