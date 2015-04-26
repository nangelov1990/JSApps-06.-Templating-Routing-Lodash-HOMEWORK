var app = app || {};

app.dataView  = (function () {
    function geterateAllBooks (selector, data) {
        $.get('template/allBooks.html', function (template) {
            generator(selector, template, data);
        });
    };

    function generateBooksGroupedByLanguage (selector, data) {
        $.get('template/groupeByLanguage.html', function (template) {
            generator(selector, template, data);
        });
    };

    function generator(selector, template, data) {
        var output = Mustache.render(template, data);

        $(selector).html(output);
    };

    return {
        geterateAllBooks: function (selector, data) {
            var view  = geterateAllBooks (selector, data);

            return view;
        },
        generateBooksGroupedByLanguage: function (selector, data) {
            var view  = generateBooksGroupedByLanguage (selector, data);

            return view;
        }
    };
}());
