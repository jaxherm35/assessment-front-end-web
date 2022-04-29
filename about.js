console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function comp(evt) {
	evt.preventDefault();

	alert('Hey baby, take me to dinner')
}

let img = document.querySelector('img').addEventListener('mouseover', comp)

