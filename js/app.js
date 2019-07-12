
function initGame(){
	$(".gamePlay").hide();
	$(".losingPage").hide();
}
initGame();

$("#gameSong").volume = 0.4;
$("#audioClip").volume = 1.0;

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

let gameOn = true;

function grabSquare(x, y){
	return $(`.square[x="${x}"][y="${y}"]`);
}

function removeStone(){
	if(grabSquare(this.x,this.y).hasClass("powerStone")){
		grabSquare(this.x,this.y).removeClass("powerStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#power").addClass("powerStone");
	}else if(grabSquare(this.x,this.y).hasClass("mindStone")){
		grabSquare(this.x,this.y).removeClass("mindStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#mind").addClass("mindStone");
	}else if(grabSquare(this.x,this.y).hasClass("spaceStone")){
		grabSquare(this.x,this.y).removeClass("spaceStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#space").addClass("spaceStone");
	}else if(grabSquare(this.x,this.y).hasClass("soulStone")){
		grabSquare(this.x,this.y).removeClass("soulStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#soul").addClass("soulStone");
	}else if(grabSquare(this.x,this.y).hasClass("timeStone")){
		grabSquare(this.x,this.y).removeClass("timeStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#time").addClass("timeStone");
	}else if(grabSquare(this.x,this.y).hasClass("realityStone")){
		grabSquare(this.x,this.y).removeClass("realityStone");
		this.points ++;
		// $("#numberOfStones").text(this.points);
		$("#reality").addClass("realityStone");
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
		if(gameOn === true){
		if(this.direction === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
			this.x--;
			this.checkDeath();
			removeStone.bind(this)();
			checkPoints();
			this.checkGauntlet();
		}else if(this.direction === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
			this.x++;
			this.checkDeath();
			removeStone.bind(this)();
			checkPoints();
			this.checkGauntlet();
		}else if(this.direction === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
			this.y++;
			this.checkDeath();
			removeStone.bind(this)();
			checkPoints();
			this.checkGauntlet();
		}else if(this.direction === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
			this.y--;
			this.checkDeath();
			removeStone.bind(this)();
			checkPoints();
			this.checkGauntlet();
		}
		this.render();
		setTimeout(()=>{
			this.move();
		},250)
	}
	},
	checkDeath(){
		if(grabSquare(this.x, this.y).hasClass("thanos") || grabSquare(this.x, this.y).hasClass("blackDwarf") || grabSquare(this.x, this.y).hasClass("corvusGlaive") || grabSquare(this.x, this.y).hasClass("ebonyMaw") || grabSquare(this.x, this.y).hasClass("proximaMidnight")){
		$('.player1').removeClass("player1");
		watchIsRunning = false;
		gameOn = false;
		clearInterval(timer);
		alert("You've run into the Black Order, and have been killed!");
		$(".gamePlay").hide();
		$(".losingPage").show();
		$("#gameSong").attr("src", "")
		$("#audioClip").attr("src", "gameOverThanosQuote.mp3");
		$(".futureLosingImage").addClass("losingImage");
		}
	},
	checkGauntlet(){
		if(grabSquare(this.x, this.y).hasClass("infinityGauntlet")){
			gameOn = false;
			grabSquare(this.x, this.y).removeClass("infinityGauntlet");
			// $("#gameSong").attr("src", "https://youtu.be/enF9O6ILx-Q?t=22")
			grabSquare(thanos.x, thanos.y).removeClass("thanos");
			grabSquare(thanos.x, thanos.y).addClass("dust");
			grabSquare(blackDwarf.x, blackDwarf.y).removeClass("blackDwarf");
			grabSquare(blackDwarf.x, blackDwarf.y).addClass("dust");
			grabSquare(corvusGlaive.x, corvusGlaive.y).removeClass("corvusGlaive");
			grabSquare(corvusGlaive.x, corvusGlaive.y).addClass("dust");
			grabSquare(ebonyMaw.x, ebonyMaw.y).removeClass("ebonyMaw");
			grabSquare(ebonyMaw.x, ebonyMaw.y).addClass("dust");
			grabSquare(proximaMidnight.x, proximaMidnight.y).removeClass("proximaMidnight");
			grabSquare(proximaMidnight.x, proximaMidnight.y).addClass("dust");
			clearInterval(timer);
			setTimeout(()=>{
				$(".dust").removeClass("dust");
			}, 5000)
		}
	}
}



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
		if(gameOn === true){
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
	}
	};
	checkKill(){
		if(grabSquare(this.x, this.y).hasClass("player1")){
			$(".player1").removeClass("player1");
			watchIsRunning = false;
			gameOn = false;
			clearInterval(timer);
			alert("You've been caught and killed by the Black Order!");
			$(".gamePlay").hide();
			$(".losingPage").show();
			$("#gameSong").attr("src", "")
			$("#audioClip").attr("src", "gameOverThanosQuote.mp3");
			$(".futureLosingImage").addClass("losingImage");
			// $(".futureDeathQuote").text("R.I.P. Tony Stark");
			// $(".futureDeathQuote").addClass("deathQuote");

		}
	}
};

const thanos = new Enemy("thanos", 7, 9, 250);
const blackDwarf = new Enemy("blackDwarf", 1, 1, 500);
const corvusGlaive = new Enemy("corvusGlaive", 14, 11, 500);
const ebonyMaw = new Enemy("ebonyMaw", 3, 11, 500);
const proximaMidnight = new Enemy("proximaMidnight", 14, 1, 500);

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
		grabSquare(7,8).addClass("infinityGauntlet");
		player1.points = 0;
		alert("You've acquired all six infinity stones! Get to the Gauntlet and end this!")
	}
}


function playGame(){
	$(".startPage").empty();
	$(".gamePlay").show();
	createGameBoard();
	startTimer();
	thanos.move();
	blackDwarf.move();
	corvusGlaive.move();
	ebonyMaw.move();
	proximaMidnight.move();
	checkPoints();
}

$("#startGameButton").click(function(){
	playGame();
	$("#gameSong").attr("src", "avengersSuite.mp3");
})

$("#playAgainButton").click(function(){
	location.reload();
})










