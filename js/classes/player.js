// creates new player class
function Player(uniqueName){
    // definitivt protocol för varje 'Player'
    protocol = {name: uniqueName, ones:0, twos:0, threes:0, fours:0, fives:0, sixes:0, sum:0, bonus:0, onePair:0, twoPairs:0, threeOfAKind:0, fourOfAKind:0, smallStraight:0, largeStraight:0, fullHouse:0, chance:0, yatzy:0, total:0};
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
};

// lista där alla spelare sparas
var allPlayers = [];
var currentPlayer;
var currentPlayerIndex = 0;

function nextPlayer() {
    // checks if it's an existing players turn:
    // if true increments currentPlayerIndex
    if(allPlayers[currentPlayerIndex+1]){
        currentPlayerIndex++;
    // otherwise return to the first player (index 0)
    } else {
        currentPlayerIndex=0;
    }
    // the current player as its object
    currentPlayer = allPlayers[currentPlayerIndex];
}

/* 
hashifyDice - Library function to aid in calculating "hands":
Creates a structure with dice (values) and counts (how many of each value)
example:  
from [1,3,3,4,3] to {1:1,3:3,4:1}
*/
function hashifyDice(dice) {
  var hash = {};
  for(var i=0; i<dice.length; i++) {
    var eachDice = dice[i];
    if(!hash[eachDice]){
      hash[eachDice] = 0;
    }
    hash[eachDice]++;
  }
  return hash;
}
/* all possible "hands" - an object with functions for testing every hand, and return the value of it from the current dice values
*/
var hands = {
  ones: function(dice) {
    var same = hashifyDice(dice);
    if(same[1]){ // if there are any ones
        console.log('same[1] is: ',same[1]);
        console.log('hashifyDice is: ',hashifyDice(dice));
        renderPossibleScores('.ones', same[1]*1); 
        return same[1] * 1; // return their calculated value
    }
    return 0;
  },
  twoos: function(dice) {
    var same = hashifyDice(dice);
    if(same[2]){ // if there are any twos
      console.log('same[2] is: ',same[2]);
      console.log('hashifyDice is: ',hashifyDice(dice));
      renderPossibleScores('.twos', same[2]*2);
      return same[2] * 2; // return their calculated value
    }
    return 0;
  },
  threes: function(dice){
    var same = hashifyDice(dice);
    if(same[3]){ // if there are any threes
      renderPossibleScores('.threes', same[3]*3);
      return same[3] * 3; // return their calculated value
    }
    return 0;
  },
  fours: function(dice){
    var same = hashifyDice(dice);
    if(same[4]){ // if there are any fours
      renderPossibleScores('.fours', same[4]*4);
      return same[4] * 4; // return their calculated value
    }
    return 0;
  },
  fives: function(dice){
    var same = hashifyDice(dice);
    if(same[5]){ // if there are any fives
      renderPossibleScores('.fives', same[5]*5);
      return same[5] * 5; // return their calculated value
    }
    return 0;
  },
  sixes: function(dice){
    var same = hashifyDice(dice);
    if(same[6]){ // if there are any sixes
      renderPossibleScores('.sixes', same[6]*6);
      return same[6] * 6; // return their calculated value
    }
    return 0;
  },
  sum: function(dice){
    var firstHalf = protocol.ones + protocol.twos + protocol.threes + protocol.fours + protocol.fives + protocol.sixes;
    renderPossibleScores('.sum', firstHalf);
    protocol.sum = firstHalf;
    return firstHalf;
  },
  bonus: function() {
    if (protocol.sum >= 63) {
      protocol.bonus = 50;
      return 50;
    }
    return 0;
  },
  pair: function(dice){
    // sorterar resultat av tärningskast i dice-arrayen
    // från 1 till 6
    dice.sort();
      // om resultatet på index 2 i dice-array = index 3 ELLER
      // resultatet på index 3 = 4
      if (dice[2] === dice[3] || dice[3] === dice[4]){
        renderPossibleScores('.pair', dice[3]*2);
        // ...returnera det mellersta resultatet * 2 (p g a par med högst värde har hittats)
        return dice[3] * 2;
      // samma sak gäller här, fast för den första hälften av arrayen (lägre värden)
      } else if (dice[0] === dice[1] || dice[1] === dice[2]){
          renderPossibleScores('.pairs', dice[1]*2);
          return dice[1] * 2;
        }
    // no match?
    return 0;
  },
  twoPairs: function(dice){
    // sorterar resultat av tärningskast i dice-arrayen
    // från 1 till 6
    dice.sort();
      if (dice[4] == dice[3] || dice[3] == dice[2]) {
        if (dice[2] == dice[1] || dice[1] == dice[0]) {
          renderPossibleScores('.two-pairs', dice[1]*2);
          return dice[3] * 2 + dice[1] * 2;
        }
      }
    // no match?
    return 0;
  },
  threeOfAKind: function(dice){
    var hash = hashifyDice(dice);
    for(var i in hash){
      if(hash[i] >= 3){ // if there are more than one of any value we have (at least) three of a kind
        renderPossibleScores('.three-of-a-kind', i*3);
        return i * 3; // return its value
      }
    }
    // no match?
    return 0;
  },
   fourOfAKind: function(dice){
    var hash = hashifyDice(dice);
    for(var i in hash){
      if(hash[i] >= 4){ // if there are more than one of any value we have (at least) three of a kind
        renderPossibleScores('.four-of-a-kind', i*4);
        return i * 4; // return its value
      }
    }
    // no match?
    return 0;
  },
  smallStraight: function(dice){
    dice.sort();
    if (dice[0] == 1 && dice[1] == 2 && dice[2] == 3 && dice[3] == 4 && dice[4] == 5) {
      renderPossibleScores('.small-straight', 15);
      return 15;
    }
    return 0;
  },
  largeStraight: function(dice) {
    dice.sort();
    if (dice[0] == 2 && dice[1] == 3 && dice[2] == 4 && dice[3] == 5 && dice[4] == 6) {
      renderPossibleScores('.large-straight', 20);
      return 20;
    }
    return 0;
  },
  fullHouse: function(dice){
    // sorterar resultat av tärningskast i dice-arrayen
    // från 1 till 6
    dice.sort();
      if (dice[4] == dice[3] && dice[3] == dice[2]) {
        if (dice[1] == dice[0]) {
          renderPossibleScores('.full-house', dice[3]*3+dice[1]*2);
          return dice[3] * 3 + dice[1] * 2;
        }
      } else if (dice[0] == dice[1] && dice[1] == dice[2]){
          if (dice[3] == dice[4]) {
            renderPossibleScores('.full-house', dice[1]*3+dice[3]*2);
            return dice[1] * 3 + dice[3] * 2;
          }
      }    
    // no match?
    return 0;
  },
  chance: function(dice) {
      var sum = dice[0]+dice[1]+dice[2]+dice[3]+dice[4];
      renderPossibleScores('.chance', sum);
      return sum;
  },
  yatzy: function(dice){
    var hash = hashifyDice(dice);
    for(var i in hash){
      if(hash[i] >= 5){ // if there are more than one of any value we have (at least) three of a kind
        renderPossibleScores('.yatzy', 50);
        return 50; // return its value
      }
    }
    // no match?
    return 0;
  },
  total: function(dice){
    return protocol.sum + protocol.bonus + protocol.pair + protocol.twoPairs + protocol.threeOfAKind + protocol.fourOfAKind + protocol.smallStraight + protocol.largeStraight + protocol.fullHouse + protocol.chance + protocol.yatzy;
  }
};

function renderPossibleScores(whatScore, returnThis) {
  // to find the correct player and her column
  var childNo = currentPlayerIndex + 2;
  var getChild = 'td:nth-child(' + childNo + ')';

  // in the table, find table rows
  $('#protocol tr').each(function(){
    // for each tr, find clickable-class and for each of those
    $(this).find('.clickable').each(function(){
      // take whatScore, and for each of those
      $(whatScore).each(function(){
        // check if they have clickable as a class
        if ($(this).find(getChild).hasClass('clickable')) {
            // if true, use jqeury html() to insert the value (from hands) in to that td
            $(this).find(getChild).html(returnThis);
          if (count >= 0) {
            var workPls = parseInt($(this).find(getChild).html(), 10);
            console.log('workPls: ', workPls);
            console.log('returnThis: ',returnThis);
            console.log('both: ',workPls+returnThis);
            $(this).find(getChild).html(workPls); 
          } 
        } 
      });
    });
  });
}