var app = app || {};

app.controller = (function () {
	function Controller (model) {
		this.model = model;
	};

	Controller.prototype.getHomePage = function(selector) {
		var _this = this;

		_this.model.getNames()
			.then(function (data) {
				app.homeView.load(selector, data);
			})
			.then(function (error) {
				console.error(error.responseText);
			});
	};

	Controller.prototype.clickedName = function(selector, name) {
		app.clickedNameView.load(selector, name);
	};

	return {
		load: function (model) {
			var controller = new Controller(model);

			return controller;
		}
	};
}());