var app = app || {};

app.optionsView = (function () {
    function OptionsView (selector) {
        $.get('template/options.html', function (template) {
            $(selector).html(template);
        });
    };

    return {
        load: function (selector) {
            var viewModel = new OptionsView(selector);

            return viewModel;
        }
    };
}());
