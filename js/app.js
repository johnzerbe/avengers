
const gameBoard =[

	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
	[1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
	[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
	[1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1],
	[1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
	[1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1],
	[1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1],
	[1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1],
	[1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1],
	[1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1],
	[1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1],
	[1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1],
	[1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1],
	[1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1],
	[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];



const infinityStones = ["realityStone", "timeStone", "spaceStone", "powerStone", "mindStone", "soulStone"];

let timer;
let seconds = 0;
let watchIsRunning = false;
function startTimer(){
	if(!watchIsRunning){
		watchIsRunning = true;
		timer = setInterval(function(){
			seconds++;
			console.log("seconds");
			$('#seconds').text(seconds);
		}, 1000)
	}
}

function grabSquare(x, y){
	return $(`.square[x="${x}"][y="${y}"]`);
}

function removeStone(){
	if(grabSquare(this.x,this.y).hasClass("powerStone")){
		grabSquare(this.x,this.y).removeClass("powerStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}else if(grabSquare(this.x,this.y).hasClass("mindStone")){
		grabSquare(this.x,this.y).removeClass("mindStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}else if(grabSquare(this.x,this.y).hasClass("spaceStone")){
		grabSquare(this.x,this.y).removeClass("spaceStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}else if(grabSquare(this.x,this.y).hasClass("soulStone")){
		grabSquare(this.x,this.y).removeClass("soulStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}else if(grabSquare(this.x,this.y).hasClass("timeStone")){
		grabSquare(this.x,this.y).removeClass("timeStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}else if(grabSquare(this.x,this.y).hasClass("realityStone")){
		grabSquare(this.x,this.y).removeClass("realityStone");
		this.points ++;
		$("#numberOfStones").text(this.points);
	}
};


const player1 = {
	points: 0,
	y: 14,
	x: 1,
	direction: null,
	render(){
		$(".player1").removeClass("player1");
		grabSquare(this.x, this.y).addClass("player1");
	},
	move(){
		if(this.direction === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
			this.x--;
			this.checkDeath();
			removeStone.bind(this)();
		}else if(this.direction === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
			this.x++;
			this.checkDeath();
			removeStone.bind(this)();
		}else if(this.direction === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
			this.y++;
			this.checkDeath();
			removeStone.bind(this)();
		}else if(this.direction === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
			this.y--;
			this.checkDeath();
			removeStone.bind(this)();
		}
		this.render();
		setTimeout(()=>{
			this.move();
		},250)
	},
	checkDeath(){
		if(grabSquare(this.x, this.y).hasClass("thanos") || grabSquare(this.x, this.y).hasClass("blackDwarf") || grabSquare(this.x, this.y).hasClass("corvusGlaive") || grabSquare(this.x, this.y).hasClass("ebonyMaw") || grabSquare(this.x, this.y).hasClass("proximaMidnight")){
		$('.player1').removeClass("player1");
		clearInterval(timer);
		alert("You've run into the Black Order, and have been killed!");
		}
	}
}

// const thanos = {
// 	y: 9,
// 	x: 7,
// 	direction: null,
// 	render(){
// 		$(".thanos").removeClass("thanos");
// 		grabSquare(this.x, this.y).addClass("thanos");
// 	},
// 	move(){
// 		const directions = ["left", "right", "down", "up"];
// 		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
// 		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
// 			this.x--;
// 		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
// 			this.x++;
// 		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
// 			this.y++;
// 		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
// 			this.y--;
// 		}
// 		this.render();
// 		setTimeout(()=>{
// 			this.move();
// 		}, 500)
// 	}
// };

// const blackDwarf = {
// 	y: 1,
// 	x: 1,
// 	render(){
// 		$(".blackDwarf").removeClass("blackDwarf");
// 		grabSquare(this.x, this.y).addClass("blackDwarf");
// 	},
// 	move(){
// 		const directions = ["left", "right", "down", "up"];
// 		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
// 		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
// 			this.x--;
// 		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
// 			this.x++;
// 		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
// 			this.y++;
// 		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
// 			this.y--;
// 		}
// 		this.render();
// 		setTimeout(()=>{
// 			this.move();
// 		}, 750)
// 	}
// };

// const corvusGlaive = {
// 	y: 11,
// 	x: 14,
// 	direction: null,
// 	render(){
// 		$(".corvusGlaive").removeClass("corvusGlaive");
// 		grabSquare(this.x, this.y).addClass("corvusGlaive");
// 	},
// 	move(){
// 		const directions = ["left", "right", "down", "up"];
// 		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
// 		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
// 			this.x--;
// 		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
// 			this.x++;
// 		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
// 			this.y++;
// 		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
// 			this.y--;
// 		}
// 		this.render();
// 		setTimeout(()=>{
// 			this.move();
// 		}, 750)
// 	}
// };

// const ebonyMaw = {
// 	y: 11,
// 	x: 3,
// 	direction: null,
// 	render(){
// 		$(".ebonyMaw").removeClass("ebonyMaw");
// 		grabSquare(this.x, this.y).addClass("ebonyMaw");
// 	},
// 	move(){
// 		const directions = ["left", "right", "down", "up"];
// 		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
// 		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
// 			this.x--;
// 		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
// 			this.x++;
// 		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
// 			this.y++;
// 		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
// 			this.y--;
// 		}
// 		this.render();
// 		setTimeout(()=>{
// 			this.move();
// 		}, 750)
// 	}
// };

// const proximaMidnight = {
// 	y: 1,
// 	x: 14,
// 	direction: null,
// 	render(){
// 		$(".proximaMidnight").removeClass("proximaMidnight");
// 		grabSquare(this.x, this.y).addClass("proximaMidnight");
// 	},
// 	move(){
// 		const directions = ["left", "right", "down", "up"];
// 		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
// 		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
// 			this.x--;
// 		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
// 			this.x++;
// 		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
// 			this.y++;
// 		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
// 			this.y--;
// 		}
// 		this.render();
// 		setTimeout(()=>{
// 			this.move();
// 		}, 750)
// 	}
// };

class Enemy {
	constructor(className, x, y, speed) {
		this.className = className;
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.direction = null;
	}render(){
		$(`.${this.className}`).removeClass(`${this.className}`);
		grabSquare(this.x, this.y).addClass(`${this.className}`);
	};
	move(){
		const directions = ["left", "right", "down", "up"];
		const randomDirection = directions[Math.floor(Math.random()*directions.length)];
		if(randomDirection === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
			this.x--;
			this.checkKill();
		}else if(randomDirection === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
			this.x++;
			this.checkKill();
		}else if(randomDirection === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
			this.y++;
			this.checkKill();
		}else if(randomDirection === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
			this.y--;
			this.checkKill();
		}
		this.render();
		setTimeout(()=>{
			this.move();
		}, this.speed)
	};
	checkKill(){
		if(grabSquare(this.x, this.y).hasClass("player1")){
			$(".player1").removeClass("player1");
			watchIsRunning = false;
			clearInterval(timer);
			alert("You've been caught and killed by the Black Order!")

		}
	}
};

const thanos = new Enemy("thanos", 7, 9, 500);
const blackDwarf = new Enemy("blackDwarf", 1, 1, 750);
const corvusGlaive = new Enemy("corvusGlaive", 14, 11, 750);
const ebonyMaw = new Enemy("ebonyMaw", 3, 11, 750);
const proximaMidnight = new Enemy("proximaMidnight", 14, 1, 750);

$("body").on("keydown", function(e){
	switch(e.which){
		case 37:
			player1.direction = "left";
			break;
		case 39:
			player1.direction = "right";
			break;
		case 38:
			player1.direction ="up";
			break;
		case 40:
			player1.direction = "down";
			break;
		default:
			console.log("SELECTION IS NOT A DIRECTION");
	}
});

function createGameBoard(){
	for(let y = gameBoard.length - 1; y >= 0; y--){
		const row = $("<div>").addClass(`row${y}`);
		$("#gameBoard").append(row);
			for(let x = 0; x < gameBoard[y].length; x++){
				// const randomStone = infinityStones[Math.floor(Math.random()*infinityStones.length)];
				const square = $(`<div class='square'/>`);
				$(`.row${y}`).append(square);
				square.attr("x", x);
				square.attr("y", y);
				if(gameBoard[y][x] === 1){
					square.addClass("wall");
				} else{
					square.addClass("path");
					// grabSquare([x],[y]).addClass(randomStone);
				} placeStones();
		} player1.render();
		thanos.render();
		blackDwarf.render();
		corvusGlaive.render();
		ebonyMaw.render();
		proximaMidnight.render();
	} player1.move();
}
// createGameBoard();


function placeStones(){
	grabSquare(14,14).addClass(infinityStones[0]).addClass("infinityStone");
	grabSquare(11,3).addClass(infinityStones[1]).addClass("infinityStone");
	grabSquare(3,6).addClass(infinityStones[2]).addClass("infinityStone");
	grabSquare(9,10).addClass(infinityStones[3]).addClass("infinityStone");
	grabSquare(3,1).addClass(infinityStones[4]).addClass("infinityStone");
	grabSquare(2,11).addClass(infinityStones[5]).addClass("infinityStone");
}


function checkPoints(){
	if(player1.points === 6){
		// $(".infinityGauntlet").removeClass("infinityGauntlet");
		grabSquare(7,8).addClass("infinityGauntlet");
	}
}

function playGame(){
	createGameBoard();
	startTimer();
	thanos.move();
	blackDwarf.move();
	corvusGlaive.move();
	ebonyMaw.move();
	proximaMidnight.move();
	checkPoints();
}


playGame();









