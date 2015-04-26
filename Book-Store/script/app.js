var app = app || {};

(function () {
    var model = app.model.load(),
        controller = app.controller.load(model),
        optionsContainer = $('#options-container'),
        dataContainer = $('#data-container');

    controller.getOptions(optionsContainer);

    app.router = Sammy(function () {
        this.get('#/', function () {
            controller.getAllBooks(dataContainer);
        });

        this.get('#/booksGroupedByLanguage&SortedByAuthor/', function () {
            controller.getGroupedBooksByLanguageSortedByAuthor(dataContainer);
        });

        this.get('#/averageBookPricePerAuthor/', function () {
            controller.getAllBooks(dataContainer);
        });

        this.get('#/booksInEnglishOrGermanWithPriceBelow30GroupedByAuthor/', function () {
            controller.getAllBooks(dataContainer);
        });
    });

    app.router.run('#/');
}());