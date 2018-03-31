
var canvas = document.getElementById('sky');
var ctx = canvas.getContext('2d');
var W = window.innerWidth;
var H = window.innerHeight;

canvas.width = W;
canvas.height = H;

var mf = 300;
var flakes = flakes = [];
var toggle = true;


for(var i = 0; i < mf; i++){
	flakes.push({
		x: Math.random()*W, //create object of different properties
		y: Math.random()*H,
		r: findRandom()*3 + 1, //between 2 and 9; times 6
		angle: Math.random() * 360
		//toggle: true
	})
}

function findRandom(){
	var x = Math.random();
	var y = Math.random();
	if(x > y){
		return y;
	}
	return x;
}

function drawFlakes(){
		ctx.clearRect(0,0,W,H);
	for(var i = 0; i < mf; i++){
		var f = flakes[i];
		ctx.beginPath();
		ctx.arc(f.x, f.y, f.r,0,2*Math.PI);
		var temp = Math.random();
		//if(temp > 0.99 && f.r < 1.5){
			//ctx.fillStyle = 'black';
		//}
		//else{
			ctx.fillStyle = 'white';
		//}
		ctx.fill()
		ctx.stroke();
	}
	moveFlakes();
}

function moveFlakes(){
	for(var i = 0; i < mf; i++){
		var f = flakes[i];
		f.y += f.r*0.01; //times 0.8
		f.x += Math.sin(f.angle)*f.r/16; //divide by 4
		f.angle += 0.0005; //plus 0.05
		//var toggle = true;
		//if(toggle == true){
			//f.r += 0.01;
		//}
		//else if (toggle == false){
			//f.r -= 0.01;
		//}


		if(f.y > H){
			flakes[i] = {
				x: Math.random()*W,
				y: 0,
				r: findRandom()*5 + 1,
				angle: f.angle
			}
		}

		if(f.x < 0){
			flakes[i] = {
				x: W,
				y: Math.random()*H,
				r: findRandom()*3 + 1,
				angle: f.angle
			}
		}

	}
}

setInterval(drawFlakes, 25);
