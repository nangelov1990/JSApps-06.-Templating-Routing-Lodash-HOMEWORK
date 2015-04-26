var app = app || {};

app.model = (function () {
    function BookDataModel () {
        this._data = {
            books: []
        };
    };

    BookDataModel.prototype.getBooks = function () {
        var _this = this,
            defer = Q.defer,
            books = data.results;

        books.forEach(function (dataBook) {
            var book =
                new Book(
                    dataBook.book,
                    dataBook.author,
                    dataBook.price,
                    dataBook.language
                );

            _this._data['books'].push(book);
        });

        return _this._data;
    };

    return {
        load: function () {
            var model = new BookDataModel();

            return model;
        }
    };
}());