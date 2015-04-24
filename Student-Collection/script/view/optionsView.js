var app = app || {};

app.optionsView = (function () {
	function OptionsView (selector) {
		$.get('templates/options.html', function (template) {
			var options = Mustache.render(template);

			$(selector).html(options);
		});
	};

	return {
		load: function (selector) {
			var optionsView = new OptionsView(selector);

			return optionsView;
		}
	};
}());