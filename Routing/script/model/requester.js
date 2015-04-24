var app = app || {};

app.model.requester = (function () {
	function Requester (baseUrl) {
		this._baseUrl = baseUrl;
	};

	Requester.prototype.get = function(serviceUrl) {
		var headers = getHeaders(),
			url = this._baseUrl + serviceUrl,
			request = makeRequest('get', headers, url);

		return request;
	};

	function makeRequest (method, headers, url, data) {
		var _this = this,
			defer = Q.defer();

		$.ajax({
			method: method,
			headers: headers,
			url: url,
			data: JSON.stringify(data),
			success: function (data) {
				defer.resolve(data);
			},
			error: function (error) {
				defer.reject(error);
			}
		});

		return defer.promise;
	};

	function getHeaders () {
		var headers = {
			'X-Parse-Application-ID': 's6eT22G0NSN7MqZw4WHz3nyoV4jSrBNsD2KkxqxW',
			'X-Parse-REST-API-Key': 'ZrWTklGqQe42DW802U52bFyUmKrZZ5YxmlDRIJkW',
			'Content-Type': 'application/json'
		};

		return headers;
	};

	return {
		load: function (baseUrl) {
			var requester = new Requester(baseUrl);

			return requester;
		}
	};
}());