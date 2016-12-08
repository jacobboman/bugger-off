function theStart() {
	// create a popup with all the 'choose amount of players'-buttons
	$('body').append(
		'<div class="popup-bg">' +
			'<div class="dom-popup">' + 
				'<div class="row">' +
				  '<div class="col-lg-6 player-input">' +
					  	'<label for="usrnm" class="ui-hidden-accessible player-label">Spelare:</label>' +
					  	'<input type="text" name="user" id="usrnm" placeholder="Namn">' +
						'<input type="submit" data-inline="true" class="add-players" value="Lägg till spelare">' +
				   '</div><!-- /.col-lg-6 -->' +
				   '<div class="col-lg-6 player-list">' +
				  		'<ol class="name-list"></ol>' +
				  	'</div>' +
				'</div><!-- /.row -->' +
			'</div>' +
		'</div>');


		$('.add-players').on('click', function(event) {
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
			// $('#usrnm').val('');
			
			console.log(newPlayer);
			// den nya spelaren pushas in i den globala arrayen allPlayers
			allPlayers.push(newPlayer);
		});
			
			
			console.log(allPlayers);

		// remove the popup
		$('.btn-primary').on('click', function() {
			$('.popup-bg').remove();
	});
}

function showScoreOptions(playerNo) {
	var whereTo = playerNo + 2;
	var pair = 4;
	var getChild = "td:nth-child(" + whereTo + ")";
	$('.one-pair ' + getChild).html(pair);
}


