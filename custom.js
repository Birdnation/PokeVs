$('.submit').click( function searchPokemon (event){
	event.preventDefault();
	$('.name').empty();
	$('.type').empty();
    $('.description').empty();
    $('.photo').empty();

	var pokemon = $('input').val();
		$.ajax({
			type: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,
            
			success: function (response) {
				console.log(response);
				$('.name').append('<span>' + response.name + '</span>');
				// $('.description').text(response.name);
				
				response.types.forEach(function (types) {
					var pokemonType = types.type.name
					$('.type').append('<span>' + pokemonType + '  </span>');		
                    });
                
                $('.photo').append('<img src="'+ response.sprites.front_default +'" alt="">')
			},
			error: function error () {
				//si falla la baina
			}
			
		})

		$.ajax({
			
			type: 'GET',
			
			url: 'http://pokeapi.co/api/v2/pokemon-species/' + pokemon,
			
			success: function (response) {

				console.log(response);
				
				$('.description').append('<span>' + response.flavor_text_entries[27].flavor_text + '</span>');
            },
            
            error: function error () {
				//si falla la baina
			}
			
		})

}) // end submit searchPokemon

//basura de grafico
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title:{
            text: "Email Categories",
            horizontalAlign: "left"
        },
        data: [{
            type: "doughnut",
            startAngle: 60,
            //innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: [
                { y: 67, label: "Inbox" },
                { y: 28, label: "Archives" },
                { y: 10, label: "Labels" },
                { y: 7, label: "Drafts"},
                { y: 15, label: "Trash"},
                { y: 6, label: "Spam"}
            ]
        }]
    });
    chart.render();
    
    }