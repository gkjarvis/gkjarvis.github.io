/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function letsPlay(){
	document.play == "X";
}
		

//function to match click event on div
function move(data){
	if(data.innerHTML == ""){
		data.innerHTML = document.play;
	genNum();
	}else {
		message("Cannot Move here");
	}
		}

//function to convert all data id's into one 
function  oneData(){
return document.getElementById("data" + number).innerHTML;
}
//console.log(oneData);



//generate a random number to assign x or o
var randomNumber = Math.floor(Math.random()*4)
// switch turn
/*function genNum(){
	if (randomNumber % 2 == 0){
		document.play ="X";
		}else {
			document.play = "O";
		}
	message(document.play + " has a turn!");
	
}
 
*/
function genNum(){
if (document.play == "X"){
	document.play = "O";
}else{
document.play ="X";
}
	message(document.play + " has a turn!");
}
// MESSAGE FUNCTION
	
	function message(themess){
	document.getElementById("message").innerHTML = themess;
}
//reset the board
	
function reset(){
		window.location.reload();
	}
		
// check rows to win
//var grid = array ();
	
function checkCombo(a, b, c, oneData){
	if ((oneData(a) === oneData(b)) 
			&& (oneData(b)=== oneData(c))
			&& (oneData(a) != ""|| oneData(b) !="" ||oneData(c)!="")){
		winner();
		return true;
	}
	else{
		return false;
	}
}

	
	//ALERT SOMEONE WON	
function winner(){
	window.alert("WINNER!!!! Restart the Game ");
}

    //winning combinations
		
function winningCombo(oneData){
    //var a = 0 
		var checkData = false;
	if (checkCombo(1, 2, 3, combo) || checkCombo( 4, 5, 6, combo) ||
	   checkCombo (7, 8, 9, combo) || checkCombo (1, 4, 7, combo) ||
	   checkCombo (2, 5, 8, combo) || checkCombo (3, 6, 9, combo) ||
	   checkCombo (1, 5, 9, combo) || checkCombo (3, 5, 7, combo));
	 checkData = true;
	 return checkData;
};


 		
message();
genNum();
console.log(randomNumber);

/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/1:43
*/
/*
Exception: SyntaxError: missing ) after condition
@Scratchpad/1:36
*/
/*
Exception: SyntaxError: expected expression, got '='
@Scratchpad/1:35
*/
/*
Exception: SyntaxError: expected expression, got '='
@Scratchpad/1:35
*/
/*
Exception: SyntaxError: expected expression, got '='
@Scratchpad/1:35
*/
/*
Exception: ReferenceError: random is not defined
genNum@Scratchpad/1:46:1
@Scratchpad/1:104:1
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:49
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:49
*/
/*
Exception: SyntaxError: expected expression, got '}'
@Scratchpad/1:49
*/
/*
Exception: SyntaxError: expected expression, got keyword 'else'
@Scratchpad/1:20
*/
/*
Exception: SyntaxError: missing } after function body
@Scratchpad/1:135
*/