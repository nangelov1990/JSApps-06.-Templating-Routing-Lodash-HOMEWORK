var app = app || {};

app.dataView = (function () {
	function DataView (selector, data) {
		$.get('templates/data.html', function (template) {
			var output = Mustache.render(template, data);

			$(selector).html(output);
		});
	};

	return {
		load: function (selector, data) {
			var dataView = new DataView (selector, data);

			return dataView;
		}
	};
}());