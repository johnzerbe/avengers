
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




function createGameBoard(){
	for(let y = gameBoard.length - 1; y >= 0; y--){
		const row = $("<div>").addClass(`row${y}`);
		$("#gameBoard").append(row);
			for(let x = 0; x < gameBoard[y].length; x++){
				const square = $(`<div class='square'/>`);
				$(`.row${y}`).append(square);
				square.attr("x", x);
				square.attr("y", y);
				if(gameBoard[y][x] === 1){
					square.addClass("wall");
				} else{
					square.addClass("path");
				}
		}
	}
}
createGameBoard();

function grabSquare(x, y){
	return $(`.square[x="${x}"][y="${y}"]`);
}


const player1 = {
	y: 14,
	x: 1,
	render(){
		$(".player1").removeClass("player1");
		grabSquare(this.x, this.y).addClass("player1");
	},
	move(direction){
		if(direction === "left" && grabSquare(this.x-1, this.y).hasClass("path")){
			this.x--;
		}else if(direction === "right" && grabSquare(this.x+1, this.y).hasClass("path")){
			this.x++;
		}else if(direction === "up" && grabSquare(this.x, this.y+1).hasClass("path")){
			this.y++;
		}else if(direction === "down" && grabSquare(this.x, this.y-1).hasClass("path")){
			this.y--;
		}
		this.render();
	}
}

$("body").on("keyup", function(e){
	switch(e.which){
		case 37:
			player1.move("left");
			break;
		case 39:
			player1.move("right");
			break;
		case 38:
			player1.move("up");
			break;
		case 40:
			player1.move("down");
			break;
		default:
			console.log("SELECTION IS NOT A DIRECTION");
	}
});


// function addThanos(){
// 	$("#column7square6").append('<img src="https://thumbs.gfycat.com/DifferentNegativeEmeraldtreeskink-size_restricted.gif" height="40px" width="40px"/>');
// }
// addThanos();

// function addUltron(){
// 		$("#column8square6").append('<img src="http://www.battlescenes.com.br/assets/Ultron1.png" height="40px" width="40px"/>');
// }
// addUltron();

// function addEbonyMaw(){
// 	$("#column8square7").append('<img src="https://ui-ex.com/images/thanos-drawing-drawn-2.png" height="40px" width="40px"/>');
// }
// addEbonyMaw();

// function addLoki(){
// 	$("#column7square7").append('<img src="http://www.classicmarvelforever.com/images/loki.gif" height="40px" width="40px"/>');
// }
// addLoki();









