
console.log('Hi!')

const $colors = document.querySelectorAll('#colors > div')
const $img = document.querySelector('#img')


function changeColor(color) {
	const $card = document.querySelector('#card')
	$card.className = 'card'
	$card.classList.add(`color-${color}`)
	$img.src = `assets/nike-${color}.png`
}


console.log($colors)


$colors.forEach(color => {
	color.addEventListener('click', e => changeColor(e.target.className))
})