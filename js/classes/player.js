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





function placingPoints(dice){
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
    ones: function(placing){
        var simillar= placing;
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
    twos: function(placing){
        var simillar= placing;
        if(simillar[5]){
            return simillar[5] * 5;
        }
        return 0;
    },
    // threes: function(placing){
    //  var simillar= placing;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // fours: function(){
    //  var simillar= placing;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // fives: function(){
    //  var simillar= placing;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    // sixes: function(){
    //  var simillar= placing;
    //  if(simillar[3]){
    //      return simillar[3] * 3;
    //  }
    //  return 0;
    // },
    onePair: function(placing){
        var simillar= placing;
        for(var i in simillar){
            if(simillar[i] > 1){
                return i * simillar[i];
            }
        }
        return 0;
    }
    //, 
    // twoPairs: function(){
    //  var simillar= placing;
    //  for(var i in simillar){
    //      if(simillar[i] > 2){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // },
    // threeOfAKind: function(){
    //  var simillar= placing;
    //  for(var i in simillar){
    //      if(simillar[i] > 3){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // },   
    // fourOfAKind: function(){
    //  var simillar= placing;
    //  for(var i in simillar){
    //      if(simillar[i] > 4){
    //          return i * simillar[i];
    //      }
    //  }
    //  return 0;
    // }    


};

