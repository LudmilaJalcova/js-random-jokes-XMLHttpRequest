const icon = document.getElementById('icon')
const jokeText = document.getElementById('joke')
const btn = document.getElementById('btnAddJoke')

btn.addEventListener('click', () => {
	const xhr = new XMLHttpRequest()

	xhr.open('GET', 'https://api.chucknorris.io/jokes/random', true)

	xhr.onload = function () {
		if (this.status === 200) {
			const response = JSON.parse(this.responseText)
			// console.log(response.value)
			// console.log(response.icon_url)
			let img = `<img src="${response.icon_url}"></img>`
			let text = `<div>${response.value}</div>`
			document.getElementById('icon').innerHTML = img
			document.getElementById('joke').innerHTML = text
		} else {
			console.log('there was an error')
		}
	}

	xhr.send()
})
