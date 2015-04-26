var Book = (function () {
    function Book (name, author, price, language) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.language = language;
    };

    return Book;
}());
