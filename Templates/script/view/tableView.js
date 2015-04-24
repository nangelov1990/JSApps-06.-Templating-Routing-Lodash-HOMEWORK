var app = app || {};

app.TableView = (function () {
	function TableView (selector, data) {
		$.get('templates/table.html', function (template) {
			var table = Mustache.render(template, data);

			$(selector).html(table);
		});
	};

	return {
		load: function (selector, data) {
			var tableVIew = new TableView(selector, data);

			return tableVIew;
		}
	};
}());