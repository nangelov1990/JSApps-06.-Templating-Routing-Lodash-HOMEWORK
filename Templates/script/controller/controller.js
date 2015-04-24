var app = app || {};

app.controller = (function () {
	function Controller (model) {
		this.model = model;
	};

	Controller.prototype.getTable = function(selector) {
		var _this = this;

		_this.model.getTableData()
			.then(function (data) {
				app.TableView.load(selector, data);
			})
			.then(function (error) {
				console.error(error.responseText);
			});
	};

	return {
		load: function (model) {
			var controller = new Controller(model);

			return controller;
		}
	};
}());