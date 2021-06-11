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


function fillSquares() {
        const squares = document.querySelectorAll('.square')
        squares.forEach(square => square.addEventListener('mouseover', (e) => e.target.style.background = 'black'))

        const grid = document.querySelector('.container');
        grid.addEventListener('touchmove', (e) => e.target.style.background = 'black');
}

function deleteGrid() {
	const grid = document.querySelector('.container')
	const boxes = Array.from(grid.children.valueOf());
	boxes.forEach(child => child.remove());
}

function resetGrid() {
	const input = document.querySelector('#size')
	size = Number(input.value)
	if (size < 1 || size > 64 || !size) {
		deleteGrid();
		makeGrid(16);
		fillSquares();
	}else {
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

makeGrid(16);
fillSquares();
addResetListeners();
