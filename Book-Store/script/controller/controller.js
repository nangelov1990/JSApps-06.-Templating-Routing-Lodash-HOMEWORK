var app = app || {};

app.controller = (function () {
    function Controller (model) {
        this.model = model;
        this.booksArray = getData(this);
    };

    Controller.prototype.getOptions = function (selector) {
        app.optionsView.load(selector);
    };

    Controller.prototype.getAllBooks = function (selector) {
        var booksArray = this.booksArray;

        booksArray['heading'] = 'All Books';

        app.dataView.geterateAllBooks(selector, booksArray);
    };

    Controller.prototype.getGroupedBooksByLanguageSortedByAuthor = function (selector) {
        var booksArray = this.booksArray,
            sortedByPriceThenByAuthor = _(data.results).chain().sortBy(function(book) {
                return book.price;
            }).sortBy(function(book) {
                return book.author;
            }).value(),
            groupedByLanguage = _.groupBy(
                sortedByPriceThenByAuthor,
                function(book) { return book.language }),
            mustacheFormattedData = {
                heading: 'All books grouped by language and sorted by author (if two books have the same author, sorted by price)',
                booksGroupedByLanguage: []
            };

        for (var prop in groupedByLanguage ){
            if (groupedByLanguage.hasOwnProperty(prop)){
                mustacheFormattedData['booksGroupedByLanguage'].push({
                    'languageOfBook' : prop,
                    'book' : groupedByLanguage[prop]
                });
            };
        };

        app.dataView.generateBooksGroupedByLanguage(selector, mustacheFormattedData)
    };

    function getData (controller) {
        var collectedData = controller.model.getBooks();

        return collectedData;
    };

    return {
        load: function (model) {
            var controller = new Controller (model);

            return controller;
        }
    };
}());
