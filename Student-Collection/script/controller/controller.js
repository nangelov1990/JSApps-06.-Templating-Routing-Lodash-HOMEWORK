var app = app || {};

app.controller = (function () {
	function Controller (model) {
		this.model = model;
		this.studentArray = getData(this);
	};

	Controller.prototype.getOptions = function(selector) {
		app.optionsView.load(selector);
	};

	Controller.prototype.getAllStudents = function(selector) {
		var studentArray = this.studentArray;
		studentArray['heading'] = 'All students';

		app.dataView.load(selector, studentArray);
	};

	Controller.prototype.getStudentsBetween18And24YrsOld = function(selector) {
		var queryObject = {
			heading: 'All students with age between 18 and 24',
			students: _.filter(this.studentArray.students,
				function (student) {
					return (student.age >= 18 &
						student.age <=24);
				})
		};

		app.dataView.load(selector, queryObject);
	};

	Controller.prototype.getStudentsWhoseFirstNameBeforeLast = function(selector) {
		var queryObject = {
			heading: 'All students whose first name is alphabetically before their last name',
			students: _.filter(this.studentArray.students,
				function (student) {
					return (student.firstName
								.localeCompare(student.lastName) < 0);
				})
		};

		app.dataView.load(selector, queryObject);
	};

	Controller.prototype.getStudentsFromBgNamesOnly = function(selector) {
		var arrayOfStudents = [],
			queryObject = {
				heading: 'All students from Bulgaria, by names only',
				students: arrayOfStudents
			};
		
		_.where(this.studentArray.students,	{ 'country': 'Bulgaria' })
			.forEach(function (student) {
				var newStudent = _.pick(student, 'firstName', 'lastName');
				arrayOfStudents.push(newStudent);
			});

		app.dataView.load(selector, queryObject);
	};

	Controller.prototype.getLastFiveStudents = function(selector) {
		var queryObject = {
			heading: 'Last five students',
			students: _.takeRight(this.studentArray.students, 5)
		};

		app.dataView.load(selector, queryObject);
	};
	
	Controller.prototype.getFirstThreeStudentsNotFromBgAndMale = function(selector) {
		var queryObject = {
			heading: 'First three students, who are not from Bulgaria and are male',
			students: _.take(_.filter(this.studentArray.students,
					function (student) {
						return (student.country !== 'Bulgaria' &
							student.gender === 'Male')
					}),
				3)
		};

		app.dataView.load(selector, queryObject);
	};

	function getData (controller) {
		var collectedData = controller.model.getStudents();

		return collectedData;
	};

	return {
		load: function (model) {
			var controller = new Controller (model);

			return controller;
		}
	};
}());