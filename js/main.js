function theStart() {
	// create a popup with all the 'choose amount of players'-buttons
	$('body').append(
		'<div class="popup-bg">' +
			'<div class="dom-popup">' + 
				'<div class="row">' +
				  '<div class="col-lg-12 player-input">' +
					  	'<label for="usrnm" class="ui-hidden-accessible player-label">Spelare:</label>' +
					  	'<input type="text" name="user" id="usrnm" placeholder="Namn" autofocus>' +
						'<input type="submit" data-inline="true" class="btn-add-players" value="Lägg till spelare">' +
						'<input type="submit" data-inline="true" class="btn-start-game" value="Spela!!">' +
				   '</div><!-- /.col-lg-6 -->' +
				   '<div class="col-lg-12 player-list">' +
				  		'<ol class="name-list"></ol>' +
				  	'</div>' +
				  	
				'</div><!-- /.row -->' +
			'</div>' +
		'</div>');


		$('.btn-add-players').on('click', function(event) {
			event.preventDefault();
			// FÖR VARJE KLICK:
			// input-värde sparas i variabeln playerName
		 	var playerName = $('#usrnm').val();
		 	// name-key i protocol object = spelarens namn
			protocol[name] = playerName;
			// nytt Player-object skapas och värde för name-key 
			// skickas in (m h a inparametern playerName) till protocol-objektet
			// och sparas i variabeln newPlayer
			var newPlayer = new Player(playerName);
			// spelarnas namn appendas som list items i DOM
			$('.name-list').append('<li>' + playerName + '</li>');
			// input-fältet töms
			$('#usrnm').val('');
			
			console.log(newPlayer);
			// den nya spelaren pushas in i den globala arrayen allPlayers
			allPlayers.push(newPlayer);
		});
			
			console.log(allPlayers);

		// render protocol and remove the popup
		$('.btn-start-game').on('click', function() {
			allPlayers.forEach(function(player) {
				player.showProtocol();
			});
			clickOnScoreTypes();
			$('.popup-bg').remove();
	});
}

function clickOnScoreTypes() {
	$('.clickable').on('click', function() {
		console.log($(this).html());
		$(this).removeClass('clickable');
	});
}