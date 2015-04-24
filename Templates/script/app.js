var app = app || {};

(function () {
	var baseUrl = 'https://api.parse.com/1/',
		model = app.model.load(baseUrl),
		controller = app.controller.load(model),
		selector = $('#wrapper');

	controller.getTable(selector);
}());