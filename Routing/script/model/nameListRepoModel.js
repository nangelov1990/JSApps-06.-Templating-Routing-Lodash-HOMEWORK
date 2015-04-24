var app = app || {};

app.model = (function () {
	function NamesListRepoModel (baseUrl) {
		this._requester = app.model.requester.load(baseUrl);
		this.nameList = {
			names: []
		};
	};

	NamesListRepoModel.prototype.getNames = function() {
		var _this = this,
			serviceUrl = 'classes/Student',
			defer = Q.defer();

		_this.nameList['names'].length = 0;

		_this._requester.get(serviceUrl)
			.then(function (data) {
				var students = data.results;

				students.forEach(function (student) {
					_this.nameList['names'].push(student.name);
				});

				defer.resolve(_this.nameList);
			})
			.then(function (error) {
				defer.reject(error);		
			});

		return defer.promise;
	};

	return {
		load: function (baseUrl) {
			var nameListRepoModel = new NamesListRepoModel (baseUrl);

			return nameListRepoModel;
		}
	};
}());