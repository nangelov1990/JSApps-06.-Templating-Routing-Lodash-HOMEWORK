var app = app || {};

app.clickedNameView = (function () {
	function ClickedNameView (selector, name) {
		$.get('templates/clickedName.html', function (template) {
			var output = Mustache.render(template, name);

			$(selector).html(output);
		});
	};

	return {
		load: function (selector, name) {
			var clickedNameView = new ClickedNameView(selector, name);

			return clickedNameView;
		}
	};
}());