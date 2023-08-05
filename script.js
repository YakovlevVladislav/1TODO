const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list_countainer');

function addTask() {
	if (inputBox.value === '') {
		return
		// alert('Напиши что-то')
	}
	else {
		let li = document.createElement('li');
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li);
		let span = document.createElement('span');
		span.innerHTML = '\u00d7';
		li.appendChild(span)
	}
	inputBox.value = '';
	save()
}

listContainer.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.classList.toggle('checked');
		save();
	}
	else if (e.target.tagName === 'SPAN') {
		e.target.parentElement.remove();
		save();
	}
}, false);

function save() {
	localStorage.setItem('data', listContainer.innerHTML)
};

function showTask() {
	listContainer.innerHTML = localStorage.getItem('data');
}
showTask()