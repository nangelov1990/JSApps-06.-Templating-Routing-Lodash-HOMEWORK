var app = app || {};

app.model = (function () {
	function TableModel (baseUrl) {
		this._requester = app.model.requester.load(baseUrl);
		this.tableData = {
			data: []
		};
	};

	TableModel.prototype.getTableData = function() {
		var _this = this,
			serviceUrl = 'classes/Student',
			defer = Q.defer();

		_this.tableData['data'].length = 0;

		_this._requester.get(serviceUrl)
			.then(function (data) {
				var students = data.results;

				students.forEach(function (dataStudent) {
					var student = new Student(
						dataStudent.name,
						dataStudent.grade,
						dataStudent.objectId);

					_this.tableData['data'].push(student)
				});

				defer.resolve(_this.tableData);
			})
			.then(function (error) {
				defer.reject(error);
			});

		return defer.promise;
	};

	return {
		load: function (baseUrl) {
			var tableModel = new TableModel(baseUrl);

			return tableModel;
		}
	};
}());