var colors = [
		'rgb(255, 0, 0)',
		'rgb(255, 255, 0)',
		'rgb(0, 255, 0)',
		'rgb(0, 255, 255)',
		'rgb(0, 0, 255)',
		'rgb(255, 0, 255)'
]

var squares = document.querySelectorAll('.square'),
		pickedColor = colors[3];
		colorDisplay = document.getElementById('colorDisplay');

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked square
		var clickedColor = this.style.background;
		//compare color to picked color
		if(clickedColor === pickedColor){
			alert('you are right!');
		} else {
			alert('wrong');
		}
	});
}