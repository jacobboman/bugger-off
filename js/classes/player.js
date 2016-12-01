
Player.prototype.protocol = function() {
  var player = $(
	'<div>' +
	'<td class= ></td>' +	// (johan) här är grunden lagd, in med class namnen..
	'<td class= ></td>' +	// jag addar sedan värdena....
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
	'</div>');

  $('.table-bordered').append(player);
};