function askSize() {
	let size = 0
	do {
		size = prompt('Enter a size between 1 and 64')
	} while (size < 1 || size > 64)
	return size;
}

function makeGrid(sq) {
	const grid = document.querySelector('.container')
	grid.style.display='grid';
	grid.style.height='100vh';
	grid.style.gridTemplateColumns=`repeat(${sq}, ${100/sq}%)`;
	grid.style.gridTemplateRows=`repeat(${sq}, ${100/sq}%)`;
	for(let i = 0; i < sq*sq; i++) {
		const box = document.createElement('div');
		box.style.border='1px solid black'
		box.innerText='\n'
		grid.appendChild(box);
	}
}

makeGrid(askSize())
