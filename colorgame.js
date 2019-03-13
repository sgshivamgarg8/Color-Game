var squares = document.querySelectorAll(".squares");
var colordisplay = document.querySelector("#colordisplay");
var h1 = document.querySelector("h1");
var message = document.querySelector("#message");
var newcolorbutton = document.querySelector("#newcolor");
var easybutton = document.querySelector("#easy");
var hardbutton = document.querySelector("#hard");
var colors=generaterandomcolors(6);

hardbutton.classList.add("selected");

function generaterandomcolors(n){
	var arr = [];
	for( var i = 0 ; i < n ; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var color = "rgb(" + r + ", " + g +", " + b + ")";
		arr.push(color);
	}
	return arr;
}

var pickedcolor = colors[Math.floor(Math.random()*6)];

colordisplay.textContent = pickedcolor;

function appendcolors(x){
	for(var i = 0 ; i < x ; i++){
		squares[i].style.background = colors[i];
	}	
}

for(var i = 0 ; i < colors.length ; i++){
	appendcolors(6);
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.background;
		if(clickedcolor===pickedcolor){
			message.textContent = "Correct";
			newcolorbutton.textContent = "Play Again?";
			changecolor();
		} else{
			this.style.background = "#232323";
			message.textContent = "Try Again!";

		}
	});
}


easy.addEventListener("click", function(){
	easybutton.classList.add("selected");
	hardbutton.classList.remove("selected");
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
	colors = generaterandomcolors(3);
	appendcolors(3);
	pickedcolor = colors[Math.floor(Math.random()*colors.length)];
	colordisplay.textContent = pickedcolor;
});

hard.addEventListener("click", function(){
	easybutton.classList.remove("selected");
	hardbutton.classList.add("selected");
	for (var i = 3; i < squares.length; i++) {
		squares[i].style.display = "block";
	}
	colors = generaterandomcolors(6);
	appendcolors(6);
	pickedcolor = colors[Math.floor(Math.random()*colors.length)];
	colordisplay.textContent = pickedcolor;
});

function changecolor() {
	for (var i = 0; i < colors.length; i++) {
		squares[i].style.background = pickedcolor;
	}
	h1.style.background = pickedcolor;
}

newcolorbutton.addEventListener("click", function(){
	newcolorbutton.textContent = "New Colors";
	message.textContent = "";
	colors = generaterandomcolors(colors.length);
	appendcolors(colors.length);
	pickedcolor = colors[Math.floor(Math.random()*colors.length)];
	colordisplay.textContent = pickedcolor;
});