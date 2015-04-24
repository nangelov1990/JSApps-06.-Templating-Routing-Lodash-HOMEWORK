var app = app || {};

(function () {
	var baseUrl = 'https://api.parse.com/1/',
		model = app.model.load(baseUrl),
		controller = app.controller.load(model),
		homeUrl = '#/';

	app.router = Sammy(function () {
		var wrapper = $('#wrapper'),
			greeting = $('#greeting');

		this.get(homeUrl, function () {
			controller.getHomePage(wrapper);
			greeting.empty();
		});

		this.get(homeUrl + ':name', function () {
			var curName = { name: this.params['name'] }
			controller.getHomePage(wrapper);
			controller.clickedName(greeting, curName);
		});
	});

	app.router.run(homeUrl);
}());