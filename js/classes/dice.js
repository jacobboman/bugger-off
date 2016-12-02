
function roll(){
	var dice1=Math.floor(Math.random()*6) +1;
	$(".die-1").html(dice1);

	var dice2=Math.floor(Math.random()*6) +1;
	$('.die-2').html(dice2);

	var dice3=Math.floor(Math.random()*6) +1;
	$('.die-3').html(dice3);

	var dice4=Math.floor(Math.random()*6) +1;
	$('.die-4').html(dice4);

	var dice5=Math.floor(Math.random()*6) +1;
	$('.die-5').html(dice5);

	var total=dice1+dice2+dice3+dice4+dice5;

	var listItem = total;
	$("#total").empty();
	$('#total').append(listItem);
}

var count = 0;

function clicks(){

	if (count < 3){
		count++;
		console.log(count);
		$("span").empty();
		$('.counter').html(3-count);
		roll();
	}

	else{alert("ny spelares tur!");
	// roll-räknaren och tärningarna töms, ersätts med space ('&nbsp;')
	// för att tärningsrutorna ska behålla sin storlek och inte krympa
		$("span").empty();
		$(".btn").empty();
		$(".btn").append('&nbsp;', '&nbsp;');
		// countern nollställs för ny tur
		count = 0;
	}

}