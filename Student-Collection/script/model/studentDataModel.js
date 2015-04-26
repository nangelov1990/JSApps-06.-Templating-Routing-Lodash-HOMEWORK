var app = app || {};

app.model = (function () {
	function StudentDataModel () {
		this._data = {
			students: []
		};
	};

	StudentDataModel.prototype.getStudents = function() {
		var _this = this,
			defer = Q.defer(),
			students = data.results;

		students.forEach(function (dataStudent) {
			var student = 
				new Student
				(
					dataStudent.firstName,
					dataStudent.lastName,
					dataStudent.age,
					dataStudent.gender,
					dataStudent.country
				);

			_this._data['students'].push(student);
		});

		defer.resolve(_this._data);
		defer.reject(function () {
			return 'Cannot get resource';
		});

		// return defer.promise;
		return _this._data;
	};

	return {
		load: function () {
			var model = new StudentDataModel();

			return model;
		}
	};
}());