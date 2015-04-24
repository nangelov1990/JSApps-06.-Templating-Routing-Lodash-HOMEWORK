var app = app || {};

(function () {
	var model = app.model.load(),
		controller = app.controller.load(model),
		optionsContainer = $('#options-container'),
		dataContainer = $('#data-container');

	controller.getOptions(optionsContainer);
	
	app.router = Sammy(function () {
		this.get('#/', function () {
			controller.getAllStudents(dataContainer);
		});

		this.get('#/student-age/', function () {
			controller.getStudentsBetween18And24YrsOld(dataContainer);
		});

		this.get('#/first-name-before-last/', function () {
			controller.getStudentsWhoseFirstNameBeforeLast(dataContainer);
		});

		this.get('#/from-BG-names-only/', function () {
			controller.getStudentsFromBgNamesOnly(dataContainer);
		});
		
		this.get('#/last-5/', function () {
			controller.getLastFiveStudents(dataContainer);
		});

		this.get('#/first-3-not-BG-male/', function () {
			controller.getFirstThreeStudentsNotFromBgAndMale(dataContainer);
		});
	});

	app.router.run('#/');
}());