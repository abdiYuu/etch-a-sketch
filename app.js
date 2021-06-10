function makeGrid(sq) {
	const grid = document.querySelector('.container')
	grid.style.display='grid';
	grid.style.gridTemplateColumns=`repeat(${sq}, ${100/sq}%)`;
	grid.style.gridTemplateRows=`repeat(${sq}, ${100/sq}%)`;
	for(let i = 0; i < sq*sq; i++) {
		const box = document.createElement('div');
		box.style.border='1px solid black'
		box.classList.add('square')
		box.innerText='\n'
		grid.appendChild(box);
	}
}

function changeGrid() {
	const input = document.querySelector('#size')
	size = Number(input.value)
	return (size < 1 || size > 64 || !size) ? 16 : size;
}


function fillGrid(e) {
        e.target.style.background = 'black'
}


const boxes = document.querySelectorAll('.square')
const grid = document.querySelector('.container')
const confirm_button = document.querySelector('#confirm')
boxes.forEach(box => box.addEventListener('mouseover', fillGrid));
grid.addEventListener('touchmove', fillGrid);
confirm_button.addEventListener('click', makeGrid(changeGrid))

makeGrid(16)


const input = document.querySelector('#size')
input.addEventListener('focus',(e) => e.target.removeAttribute('placeholder'))
input.addEventListener('blur', (e) => e.target.setAttribute('placeholder', '1-16'))
