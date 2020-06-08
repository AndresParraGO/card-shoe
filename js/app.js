

const $colors = document.querySelectorAll('#colors > div')
const $img = document.querySelector('#img')


function changeColor(color) {
	const $card = document.querySelector('#card')
	const $cardIMG = document.querySelector('#card-img')

	$card.className = 'card'
	$cardIMG.className = 'card__img'
	$cardIMG.classList.add(`color-${color}`)
	$img.src = `assets/nike-${color}.png`
}


console.log($colors)


$colors.forEach(color => {
	color.addEventListener('click', e => changeColor(e.target.className))
})