let player = new AudioPlayer();


function renderItems(data) {
	const ul = document.querySelector('ul.playlist');

    ul.innerHTML = '';

	data.forEach(function(item){
		// console.log(item);
		const li = document.createElement('li');
		li.textContent = item.trackName;

        li.onclick = (e) => {
        	player.play(item);
        }

		ul.appendChild(li);
	})
}
const searchForm = document.querySelector('form');


searchForm.onsubmit = (e) => {
console.log('my form was submitted');
  
    // prevent normal form submission
    // render items to the browser
   
    e.preventDefault();
  // fetch items here
    let artistName = document.querySelector('#artist').value;

    let endpoint = 'https://itunes.apple.com/search?term=' + artistName;


 const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', (e) =>{
    	let response =  JSON.parse(xhr.responseText);

    	renderItems(response.results);

    });



    xhr.open('GET', endpoint, true);
    xhr.send();


}