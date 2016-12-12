var protocol = {};
// creates new player class
function Player(uniqueName){
    protocol = {name: uniqueName, ones:"x", twos:"x", threes:"x", fours:"x", fives:"x", sixes:"x", sum:"x", bonus:"x", onePair:"x", twoPairs:"x", threeOfAKind:"x", fourOfAKind:"x", smallStraight:"x", largeStraight:"x", fullHouse:"x", chance:"x", yatzy:"x", total:"x"};
    for (var i in protocol) {
    this[i] = protocol[i];
    // console.log(this[i]);
    }
    console.log(protocol);
}

// varje spelare kan visa sitt eget protokoll
Player.prototype.showProtocol = function(dice) {
    $('.headlines').append('<th class="players">' + this.name + '</th>');
    $('.ones').append('<td>' + this.ones + '</td>');
    $('.twos').append('<td>' + this.twos + '</td>');
    $('.threes').append('<td>' + this.threes + '</td>');
    $('.fours').append('<td>' + this.fours + '</td>');
    $('.fives').append('<td>' + this.fives+ '</td>');
    $('.sixes').append('<td>' + this.sixes + '</td>');
    $('.sum').append('<td>' + this.sum + '</td>');
    $('.bonus').append('<td>' + this.bonus + '</td>');
    $('.one-pair').append('<td>' + this.onePair + '</td>');
    $('.two-pairs').append('<td>' + this.twoPairs + '</td>');
    $('.three-of-a-kind').append('<td>' + this.threeOfAKind + '</td>');
    $('.four-of-a-kind').append('<td>' + this.fourOfAKind + '</td>');
    $('.small-straight').append('<td>' + this.smallStraight + '</td>');
    $('.large-straight').append('<td>' + this.largeStraight + '</td>');
    $('.full-house').append('<td>' + this.fullHouse + '</td>');
    $('.chance').append('<td>' + this.chance + '</td>');
    $('.yatzy').append('<td>' + this.yatzy + '</td>');
    $('.total').append('<td>' + this.total + '</td>');

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
var hands = {
  ones: function(dice){
    var same = hashifyDice(dice);
    if(same[1]){ // if there are any twoos
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

