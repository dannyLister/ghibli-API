let request = new XMLHttpRequest();

request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);

request.onload = function() {
	let data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach((people) => {
			console.log(people); //prove it works
		});
	}
};

request.send();
