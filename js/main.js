theStart();

function theStart() {
  var pop = $(
	'<body>' +
	'<div class="btn-group" data-toggle="buttons">' +
	'<label class="btn btn-primary active">' +
    '<input type="checkbox" autocomplete="off" checked> 1 Spelare' +
	'</label>' +
	'<label class="btn btn-primary">' +
    '<input type="checkbox" autocomplete="off"> 2 Spelare' +
	'</label>' +
	'<label class="btn btn-primary">' +
    '<input type="checkbox" autocomplete="off"> 3 Spelare' +
	'</label>' +
	'<label class="btn btn-primary">' +
    '<input type="checkbox" autocomplete="off"> 4 Spelare' +
	'</label>' +
	'<label class="btn btn-primary">' +
    '<input type="checkbox" autocomplete="off"> 5 Spelare' +
	'</label>' +
	'</div>'); +
	'</body>' +

  //$('body').remove();
  $('html').append(pop);
}
