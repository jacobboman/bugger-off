
function roll(){
	
	if($('.die-1').hasClass('locked')){

	} else {
		var dice1=Math.floor(Math.random()*6) +1;
		$(".die-1").html(dice1);
	}
	if($('.die-2').hasClass('locked')){

	} else {

	var dice2=Math.floor(Math.random()*6) +1;
	$('.die-2').html(dice2);
	}
	if($('.die-3').hasClass('locked')){

	} else {

	var dice3=Math.floor(Math.random()*6) +1;
	$('.die-3').html(dice3);
	}
	if($('.die-4').hasClass('locked')){

	} else {

	var dice4=Math.floor(Math.random()*6) +1;
	$('.die-4').html(dice4);
	}
	if($('.die-5').hasClass('locked')){

	} else {

	var dice5=Math.floor(Math.random()*6) +1;
	$('.die-5').html(dice5);
	}
	

	var total=dice1+dice2+dice3+dice4+dice5;

	var listItem = total;
	$("#total").empty();
	$('#total').append(listItem);
	
	var allDice = [dice1,dice2,dice3,dice4,dice5];
	// an example of our dice


	for(var h in hands){
  var hand = hands[h];
  // see it in the console..
  console.log(h, hand(allDice));
	}
	//console.log('allDice', allDice);
	dicePoints(allDice);

}

var count = 0;

$(document).ready(function(){
	$(".die-button").click(function(){
    $(this).toggleClass("locked");
	});
});

function clicks(){

	if (count < 11){ // fixa detta här ska vara 3 inte 11 !!!!!!
		count++;
		//console.log(count);
		$('.counter').html(3-count);
		roll();
	}

	else {alert("ny spelares tur!");
		// kasträknaren och tärningarna töms
		$("span").empty();
		$(".btn").empty();
		// countern nollställs för ny tur
		count = 0;
		$('.counter').html(3-count);
		$(".die-button").removeClass('locked');
	}

}