
					// (johan says) jo, jag har problem med att rendera. har lagt till en provisorisk
					// knapp i html som ska trigga ny player... men inget händer!!! måste lämna detta nu
					// konferans här på skolan
var players = [];

function player() {
   players = new Player();
}

Player.prototype.protocol = function() {
  var player = $(
	'<th>Player 1</th>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>' +
	'<td class= ></td>'
	);

	player.data('player',this);

  $('.table-bordered').append(player);
};