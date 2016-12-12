var protocol = {};
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

// function createPlayers(playerNames){

//     allPlayers = [new Player('Axl'), new Player('Mia'),  new Player('Ann')];
    
//     allPlayers[0].showProtocol();
//     allPlayers[1].showProtocol();
//     allPlayers[2].showProtocol();
    
//     currentPlayer = allPlayers[currentPlayerIndex];
//     console.log('allPlayers', allPlayers);
// }


function nextPlayer(){
    if(allPlayers[currentPlayerIndex+1]){
        currentPlayerIndex++;
    }
    else{
        currentPlayerIndex=0;
    }
    
    currentPlayer = allPlayers[currentPlayerIndex];
    console.log('currentPlayer',currentPlayer); 
}





function dicePoints(dice){
    console.log('dice', dice);
    var points={};
    for(var i=0; i< dice.length; i++){
        var eachDice= dice[i];
        if(!points[eachDice]){
            points[eachDice]= 0;
        }
        points[eachDice]++;
    }
    console.log("points",points);
    var res = possibilities.onePair(points);
    console.log('result', res);
}

var possibilities={
    ones: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[3]){
            return simillar[3] * 3;
        }
        return 0;
         //ones: function(c,b){
                            //var a=0;
                            //c.forEach(function(d){
                            //    if(d===1){
                            //        a=a+1;
    },
    twos: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[2]){
            return simillar[2] * 2;
        }
        return 0;
    },
    threes: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[3]){
            return simillar[3] * 3;
        }
        return 0;
    },
    fours: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[4]){
            return simillar[4] * 4;
        }
        return 0;
    },
    fives: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[5]){
            return simillar[5] * 5;
        }
        return 0;
    },
   	sixes: function(dice){
        var simillar= dicePoints(dice);
        if(simillar[6]){
            return simillar[6] * 6;
        }
        return 0;
    },
    // threes: function(dice){
    //  var simillar= dice;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // fours: function(){
    //  var simillar= dice;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // fives: function(){
    //  var simillar= dice;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // sixes: function(){
    //  var simillar= dice;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    onePair: function(dice){
        var simillar= dice;
        for(var i in simillar){
            if(simillar[i] > 1){
                return i * simillar[i];
            }
        }
        return 0;
    }
    //, 
    // twoPairs: function(){
    //  var simillar= dice;
    //  for(var i in simillar){
    //      if(simillar[i] > 2){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // },
    // threeOfAKind: function(){
    //  var simillar= dice;
    //  for(var i in simillar){
    //      if(simillar[i] > 3){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // },   
    // fourOfAKind: function(){
    //  var simillar= dice;
    //  for(var i in simillar){
    //      if(simillar[i] > 4){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // }    


};

var scoreType;
// Basically a sketch for what I think needs to be done,to get
// scoreType dynamically
Player.prototype.scoreTypeForDom = function() {
	// an array with all the values from the current throw
	scoreTypeArray = [ones, twos, threes, fours, fives, sixes, sum, bonus, onePair, twoPairs, threeOfAKind, fourOfAKind, smallStraight, largeStraight, fullHouse, chance, yatzy];
	// loop to give scoreType the 'current' score type.
	for (var i = 0; i < scoreTypeArray.length; i++) {
		scoreType = scoreTypeArray[i];
		return scoreType;
	}
};

Player.prototype.showScoreOptions = function() {
	// childNo exists because writing currentPlayerIndex +2
	// in nth-child... doesn't work
	var childNo = currentPlayerIndex + 2;
	// might not be needed, as getChild doesn't really do anything
	// looks clean this way though
	var getChild = ' td:nth-child(' + childNo + ')';
	// in table body, find table row. for each table row,
	$('tbody').find('tr').each(function() {
		// find 'this' class and store it in thisClass
		thisClass = $(this).attr('class');
		// change what's in the nth td in 'this' row
		$('.' + thisClass + getChild).html('scoreType');
	});
};