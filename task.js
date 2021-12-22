
//Task1
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);

        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);

        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);

        this.type = 'novel';
    }
}

class FantasticBook  extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);

        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);

        this.type = 'detective';
    }
}


//Task2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let book of this.books) {
            if (book[type] && book[type] === value) {
                return book
            }
        }

        return null;
    }

    giveBookByName(bookName) {
        let book = null;
        let index = null;

        this.books.forEach(function(item, ind) {
            book = item;
            index = ind;
        })

        if (book) {
            this.books.splice(index, 1);

            return book;
        }

        return null;
    }
}

class Student {
    constructor(name) {
        this.name = name;

        this.marks = [];
    }

    addMark(mark, subject) {
        if (mark < 1 || mark > 5) {
            throw new Error("Ошибка, оценка должна быть числом от 1 до 5");
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [mark];
        } else {
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (this.marks[subject] !== undefined) {
            return this.marks[subject].reduce((a, b) => a + b) / this.marks[subject].length;
        }

        return null; //Несуществующий предмет
    }

    getAverage() {
        let count = 0, sum = 0;

        console.log(this.marks);
        Object.keys(this.marks).forEach(subject => {
            sum += this.getAverageBySubject(subject);
            count++;
        });

        return sum / count;
    }

    exclude(reason) {
        delete(this.marks);

        this.excluded = reason;
    }
}
