var protocol = {};
var scoreTypeArray = [];
// creates new player class
function Player(uniqueName){
    protocol = {name: uniqueName, ones:"x", twos:"x", threes:"x", fours:"x", fives:"x", sixes:"x", sum:"x", bonus:"x", onePair:"x", twoPairs:"x", threeOfAKind:"x", fourOfAKind:"x", smallStraight:"x", largeStraight:"x", fullHouse:"x", chance:"x", yatzy:"x", total:"x"};
    for (var i in protocol) {
    this[i] = protocol[i];
    // console.log(this[i]);
	}
}
// varje spelare kan visa sitt eget protokoll
Player.prototype.showProtocol = function(dice) {


    $('.headlines').append('<th class="players">' + this.name + '</th>');
    $('.ones').append('<td class="clickable">' + this.ones + '</td>');
    $('.twos').append('<td class="clickable">' + this.twos + '</td>');
    $('.threes').append('<td class="clickable">' + this.threes + '</td>');
    $('.fours').append('<td class="clickable">' + this.fours + '</td>');
    $('.fives').append('<td class="clickable">' + this.fives+ '</td>');
    $('.sixes').append('<td class="clickable">' + this.sixes + '</td>');
    $('.sum').append('<td class="clickable">' + this.sum + '</td>');
    $('.bonus').append('<td class="clickable">' + this.bonus + '</td>');
    $('.one-pair').append('<td class="clickable">' + this.onePair + '</td>');
    $('.two-pairs').append('<td class="clickable">' + this.twoPairs + '</td>');
    $('.three-of-a-kind').append('<td class="clickable">' + this.threeOfAKind + '</td>');
    $('.four-of-a-kind').append('<td class="clickable">' + this.fourOfAKind + '</td>');
    $('.small-straight').append('<td class="clickable">' + this.smallStraight + '</td>');
    $('.large-straight').append('<td class="clickable">' + this.largeStraight + '</td>');
    $('.full-house').append('<td class="clickable">' + this.fullHouse + '</td>');
    $('.chance').append('<td class="clickable">' + this.chance + '</td>');
    $('.yatzy').append('<td class="clickable">' + this.yatzy + '</td>');
    $('.total').append('<td class="clickable">' + this.total + '</td>');

    //allPlayers.push(player);
};

// lista där alla spelare sparas
var allPlayers = [];
var currentPlayer;
var currentPlayerIndex = 0;

function nextPlayer(){
    if(allPlayers[currentPlayerIndex+1]){
        currentPlayerIndex++;
    }
    else{
        currentPlayerIndex=0;
    }
    
    currentPlayer = allPlayers[currentPlayerIndex];
    //console.log('currentPlayer',currentPlayer);
}

function dicePoints(dice){
    //console.log('dice', dice);
    var points={};
    for(var i=0; i< dice.length; i++){
        var eachDice= dice[i];
        if(!points[eachDice]){
            points[eachDice]= 0;
        }
        points[eachDice]++;
    }
    console.log('result=', dice.sort(), points);
}

/* hashifyDice - Library function to aid in calculating "hands":
Creates a structure with dice (values) and counts (how many of each value)
example:  
from [1,3,3,4,3] to {1:1,3:3,4:1}
*/
function hashifyDice(dice){
  var hash = {};
  for(var i=0; i<dice.length; i++){
    var eachDice = dice[i];
    if(!hash[eachDice]){
      hash[eachDice] = 0;
    }
    hash[eachDice]++;
  }
  return hash;
}

function straight(dice){
  dice.sort();
  var sum = dice[0];
  for(var i=1; i < dice.length; i++){
    if(dice[i] - dice[i-1] != 1){
      return 0;
    }
    sum += dice[i];
  }
  return sum;
}

/* all possible "hands" - an object with functions for testing every hand, and return the value of it from the current dice values
*/
var ones = 0;
var hands = {
  ones: function(dice){
    var same = hashifyDice(dice);
    if(same[1]){ // if there are any twoos
        // renderPossibleScores('.ones', same[1]*1, 0); 
        return same[1] * 1; // return their calculated value
    }
    return 0;
  },
  twoos: function(dice){
    var same = hashifyDice(dice);
    if(same[2]){ // if there are any twoos
      return same[2] * 2; // return their calculated value
    }
    return 0;
  },
  threes: function(dice){
    var same = hashifyDice(dice);
    if(same[3]){ // if there are any threes
      return same[3] * 3; // return their calculated value
    }
    return 0;
  },
  fours: function(dice){
    var same = hashifyDice(dice);
    if(same[4]){ // if there are any twoos
      return same[4] * 4; // return their calculated value
    }
    return 0;
  },
  fives: function(dice){
    var same = hashifyDice(dice);
    if(same[5]){ // if there are any twoos
      return same[5] * 5; // return their calculated value
    }
    return 0;
  },
  sixes: function(dice){
    var same = hashifyDice(dice);
    if(same[6]){ // if there are any sixes
      return same[6] * 6; // return their calculated value
    }
    return 0;
  },
  pair: function(dice){
    var hash = hashifyDice(dice);
    for(var i in hash){
      if(hash[i] > 1){ // if there are more than one of any value we have (at least) a pair
        return i * hash[i]; // return its value
      }
    }
    // no match?
    return 0;
  },
  threeOfAKind: function(dice){
    var hash = hashifyDice(dice);
    for(var i in hash){
      if(hash[i] > 2){ // if there are more than one of any value we have (at least) three of a kind
        return i * hash[i]; // return its value
      }
    }
    // no match?
    return 0;
  },
  lowStraight: function(dice){
    return straight(dice) == 15 ? 15 : 0;
  }
};

// var scoreType;
// Basically a sketch for what I think needs to be done,to get
// scoreType dynamically
Player.prototype.scoreTypeForDom = function() {
	// an array with all the values from the current throw
	// scoreTypeArray = [ones, twos, threes, fours, fives, sixes, sum, bonus, onePair, twoPairs, threeOfAKind, fourOfAKind, smallStraight, largeStraight, fullHouse, chance, yatzy];
	// loop to give scoreType the 'current' score type.
	for (var i = 0; i < scoreTypeArray.length; i++) {
		scoreType = scoreTypeArray[i];
		return scoreType;
	}
};

Player.prototype.showScoreOptions = function() {
	// childNo exists because writing currentPlayerIndex +2 in nth-child... doesn't work
	var childNo = currentPlayerIndex + 2;
	// might not be needed, as getChild doesn't really do anything looks clean this way though
	var getChild = 'clickable:nth-child(' + childNo + ')';
	// in table body, find table row. for each table row,
	$('tbody').find('tr').each(function() {
		// find 'this' class and store it in thisClass
		thisClass = $(this).attr('class');
			// change what's in the nth td in 'this' row
		scoreTypeArray.forEach(function(i) {
			$('.' + /*thisClass +*/ getChild ).html(scoreTypeArray[i]);
		});
	});
};

function renderPossibleScores(whatScore, sameWhich, whichIndex) {
    scoreTypeArray.splice(whichIndex, 1, sameWhich);
    var childNo = currentPlayerIndex + 2;
    // might not be needed, as getChild doesn't really do anything looks clean this way though
    var getChild = 'td:nth-child(' + childNo + ')';
    if ($(getChild).hasClass('clickable')) {
        $(whatScore).children(getChild).html(scoreTypeArray[whichIndex]);
    }
}

function testObjectKeys(k) {
    for (var i in hands) {
        if (hands.hasOwnProperty(i)) {
            k = i;
            console.log(k, hands[k]);
        }
    }
}