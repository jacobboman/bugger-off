
function roll(){
	var dice1=Math.floor(Math.random()*6) +1; $(".die-1").empty(); $('.die-1').append(dice1);
	var dice2=Math.floor(Math.random()*6) +1; $(".die-2").empty(); $('.die-2').append(dice2);
	var dice3=Math.floor(Math.random()*6) +1; $(".die-3").empty(); $('.die-3').append(dice3);
	var dice4=Math.floor(Math.random()*6) +1; $(".die-4").empty(); $('.die-4').append(dice4);
	var dice5=Math.floor(Math.random()*6) +1; $(".die-5").empty(); $('.die-5').append(dice5);

	var total=dice1+dice2+dice3+dice4+dice5;

	var listItem = total;
	$("#total").empty();
	$('#total').append(listItem);

}

var count = 0;

function clicks(){		// countern ska uppdateras (ska sluta vid 3 kilck)! lägger till den så länge!!
    count++;
	console.log(count);
	var listItem = count;
	$("span").empty();
	$('#counter').append(listItem);
}

