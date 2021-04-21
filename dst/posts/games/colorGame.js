var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


function init()
{
	setupModeButtons();
	setupSquares();
	reset();
}


resetButton.addEventListener("click", function()
	{
		reset();
	}
);


function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}

	h1.style.background = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}


function changeColors(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor( (Math.random() * colors.length) );

	return colors[random]; 
}

function randomColor()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

	var color = "rgb(" + red + ", " + green + ", " + blue + ")";
	return color;
}

function generateRandomColors(num)
{
	var arr = [];

	for(var i = 0; i < num; i++)
	{
		arr.push( randomColor() );
	}

	return arr;
}

function setupModeButtons()
{
	for(var i = 0; i < modeButtons.length; i++)
	{
		modeButtons[i].addEventListener("click", function()
		{
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares()
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function()
			{
				var clickedColor = this.style.background;
				if(clickedColor === pickedColor)
				{
					messageDisplay.textContent = "Correct!";
					changeColors(clickedColor);
					h1.style.background = clickedColor;

					resetButton.textContent = "Play Again?";
				}
				else
				{
					messageDisplay.textContent = "Try Again";
					this.style.background = "#232323";
				}
			}
		);
	}
}
