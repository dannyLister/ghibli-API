// https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API
const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

let request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
request.onload = function() {
	let data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		data.forEach((people) => {
			console.log(people); //prove it works
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			const h1 = document.createElement('h1');
			h1.textContent = people.name;

			const p1 = document.createElement('p1');
			p1.textContent = `${people.age}`;

			const p2 = document.createElement('p2');
			p2.textContent = `${people.eye_color}`;

			container.appendChild(card);
			card.appendChild(h1);
			card.appendChild(p1);
			card.appendChild(p2);
		});
	} else {
		alert('Failing to render...');
	}
};

request.send();
