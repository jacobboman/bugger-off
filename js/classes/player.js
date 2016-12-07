// creates new player class
function Player(props){
	for (var i in props) {
    this[i] = props[i];
    console.log(this[i]);
	}
}
// lista där alla spelare sparas
var allPlayers = []; 

//definitivt protokoll där de definitiva värdena ska pushas in (x byts ut)
var player = new Player({name:" ", ones:"x", twos:"x", threes:"x", fours:"x", fives:"x", sixes:"x", sum:"x", bonus:"x", onePair:"x", twoPairs:"x", threeOfAKind:"x", fourOfAKind:"x", smallStraight:"x", largeStraight:"x", fullHouse:"x", chance:"x", yatzy:"x", total:"x"});

// varje spelare kan visa sitt eget protokoll
Player.prototype.showProtocol = function() {
	$('.headlines').append('<th class="players">' + this.name + '</th>');
	$('.ones').append('<td>' + this.ones + '</td>');
	$('.twos').append('<td>' + this.twos + '</td>');
	$('.threes').append('<td>' + this.threes + '</td>');
	$('.fours').append('<td>' + this.fours + '</td>');
	$('.fives').append('<td>' + this.fives + '</td>');
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

	allPlayers.push(player);
	/*theStart();*/
}

