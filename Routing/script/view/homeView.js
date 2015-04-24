var app = app || {};

app.homeView = (function () {
	function HomeView (selector, data) {
		$.get('templates/listOfNames.html', function (template) {
			var output = Mustache.render(template, data);

			$(selector).html(output);
		});
	};

	return {
		load: function (selector, data) {
			var homeView = new HomeView(selector, data);

			return homeView;
		}
	};
}());