function theStart() {
		// create a popup with all the 'choose amount of players'-buttons
		$('body').append(
			'<div class="popup-bg">' +
				'<div class="dom-popup">' + 
					'<div class="col-sm-10 col-sm-offset-1 players-buttons">' + 
						'<div class="btn-group" data-toggle="buttons">' +
							'<label class="btn btn-primary btn-lg" onclick="player.showProtocol()">' +
						    '<input type="checkbox" autocomplete="off"> 1 Spelare' +
							'</label>' +
							'<label class="btn btn-primary btn-lg" onclick="player.showProtocol();player.showProtocol()">' +
						    '<input type="checkbox" autocomplete="off"> 2 Spelare' +
							'</label>' +
							'<label class="btn btn-primary btn-lg" onclick="player.showProtocol();player.showProtocol();player.showProtocol()">' +
						    '<input type="checkbox" autocomplete="off"> 3 Spelare' +
							'</label>' +
							'<label class="btn btn-primary btn-lg" onclick="player.showProtocol();player.showProtocol();player.showProtocol();player.showProtocol()">' +
						    '<input type="checkbox" autocomplete="off"> 4 Spelare' +
							'</label>' +
							'<label class="btn btn-primary btn-lg" onclick="player.showProtocol();player.showProtocol();player.showProtocol();player.showProtocol();player.showProtocol()">' +
						    '<input type="checkbox" autocomplete="off"> 5 Spelare' +
							'</label>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>');

		// remove the popup
		$('.btn-primary').on('click', function() {
			$('.popup-bg').remove();
	});
}

function showScoreOptions(playerNo, scoreType) {
	var whereTo = playerNo + 2;
	var pair = 4;
	var getChild = "td:nth-child(" + whereTo + ")";
	$('.one-pair ' + getChild).html(scoreType);
}