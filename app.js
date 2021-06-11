function makeGrid(sq) {
	const grid = document.querySelector('.container')
	grid.style.display='grid';
	grid.style.gridTemplateColumns=`repeat(${sq}, ${100/sq}%)`;
	grid.style.gridTemplateRows=`repeat(${sq}, ${100/sq}%)`;
	for(let i = 0; i < sq*sq; i++) {
		const box = document.createElement('div');
		box.style.background='#white'
		box.style.border='1px solid black'
		box.classList.add('square')
		box.innerText='\n'
		grid.appendChild(box);
	}
}

function changeColor(e) {
	let button_id = e.target.id
	let rgb = [];
	for(let i=0; i<3; i++) {rgb.push(Math.floor(Math.random() * 256))};
        let multi_color =  `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]}`

	let color = (button_id == 'black') ? 'black' : (button_id == 'eraser') ? 'white' : (button_id=='rainbow') ?  multi_color : 'black'
	return fillSquares(color)
}


function fillSquares(color) {
        const squares = document.querySelectorAll('.square')
        squares.forEach(square => square.addEventListener('mouseover', (e) => e.target.style.background = color))

        const grid = document.querySelector('.container');
        grid.addEventListener('touchmove', (e) => e.target.style.background = color);
}

function deleteGrid() {
	const grid = document.querySelector('.container')
	const boxes = Array.from(grid.children.valueOf());
	boxes.forEach(child => child.remove());
}

function resetGrid() {
	const input = document.querySelector('#size')
	size = Number(input.value)
	if (!(size < 1 || size > 64 || !size)) {
		deleteGrid();
		makeGrid(size);
		fillSquares();
	}
}

function addResetListeners() {
	const confirm_button = document.querySelector('#confirm')
	confirm_button.addEventListener('click', resetGrid)

	const input = document.querySelector('#size')
	input.addEventListener('focus',(e) => e.target.removeAttribute('placeholder'))
	input.addEventListener('blur', (e) => e.target.setAttribute('placeholder', '1-16'))
}

function addColorChangeListeners() {
	const options = document.querySelectorAll('.option');
	options.forEach(option => option.addEventListener('click', changeColor))
}

makeGrid(16);
fillSquares('black');
addResetListeners();
addColorChangeListeners();
