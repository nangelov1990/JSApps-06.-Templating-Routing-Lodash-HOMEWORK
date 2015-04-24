var Student = (function () {
	function Student (firstName, lastName, age, gender, country) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.gender = gender;
		this.country = country;
	};

	return Student;
}());