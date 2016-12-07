function theStart() {
	// create a popup with all the 'choose amount of players'-buttons
	$('body').append(
		'<div class="popup-bg">' +
			'<div class="dom-popup">' + 
						'<div class="row">' +
						  '<div class="col-lg-6">' +
						    '<div class="input-group">'+
							   '<input type="text" class="form-control" placeholder="Namn">' +
								   '<span class="input-group-btn">' +
							        	'<button class="btn btn-default" type="button" onclick="player.showProtocol()">Lägg till spelare</button>' +
							      	'</span>' +
							    '</div><!-- /input-group -->' +
						    '<span class="name-list"></span>' +
						  '</div><!-- /.col-lg-6 -->' +
						'</div><!-- /.row -->' +
			'</div>' +
		'</div>');



	player.name = $('.form-control').val();
	console.log(player.name);
/*	player[name] = newName;*/

	$('.name-list').append('<li>' + player.name + '</li>');
	
	
	console.log(allPlayers);
	
	

	// 	// remove the popup
	// 	$('.btn-primary').on('click', function() {
	// 		$('.popup-bg').remove();
	// });
}



