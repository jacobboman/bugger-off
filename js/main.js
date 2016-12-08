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
						'<input type="submit" data-inline="true" class="start-game" value="Spela!!">' +
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

		// render protocol and remove the popup
		$('.start-game').on('click', function() {
			allPlayers.forEach(function(player) {
				player.showProtocol();
			});
			$('.popup-bg').remove();
	});
}

// renders score in DOM. Gets playerNo from each player as this function runs
// this function should probably be a prototype in player.js
function showScoreOptions(playerNo) {
	// whereTo exists as of now, because playerNo + 2 in getChild doesn's seem to work
	var whereTo = playerNo + 2;
	// temporary value so for testing. this will be fetched by the function dynamically
	var pair = 4;
	var getChild = "td:nth-child(" + whereTo + ")";
	// this should be re-written to something like:
	// $('.' + domScoreType + getChild).html(scoreType); 
	// where domScoreType is fetched during a loop where every class in the DOM-protocol is fetched
	// and scoreType is fetched from functions within player.js
	$('.one-pair ' + getChild).html(pair);
}


