 for (let i = 1; i < 200; i++) {
    $.ajax({
        type: 'GET',
        url: '//pokeapi.co/api/v2/pokemon/' + i,
        dataType: "json",
        crossDomain : true,
        success:
        function(response){
            $('#poke1').append('<option>' + response.name.toUpperCase() + '</option>');
            $('#poke2').append('<option>' + response.name.toUpperCase() + '</option>')
        },
     })
 }
 
 
 
 $('.submit1').click( function searchPokemon (event){
	event.preventDefault();
	$('.type1').empty();
    $('.description1').empty();
    $('.photo1').empty();
    $('.chartContainer1').empty();
    let cuenta = 0;
    let chart;


    var pokemon = $('#poke1').val().toLowerCase();
		$.ajax({
			type: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,

			success: function (response) {
				console.log(response);
				response.types.forEach(function (types) {

                    var pokemonType = types.type.name

                    $.ajax({
                        type: 'GET',
                        url: 'https://pokeapi.co/api/v2/type/' + pokemonType,

                        success: function (response){
                            switch (response.names[4].name) {
                                
                                default:
                                    $('.type1').append('<span>' + response.names[4].name + '  </span>');
                                    break;
                            };
                        }

                    })
                    
						
                    });
                
                $('.photo1').append('<img src="'+ response.sprites.front_default +'" alt="">');
                
                chart = new CanvasJS.Chart("chartContainer1", {
                    backgroundColor: "rgba(255, 255, 255, .0)",
                    animationEnabled: true,
                    title:{
                    },
                    data: [{
                        type: "doughnut",
                        startAngle: 60,
                        innerRadius: 20,
                        indexLabelFontSize: 17,
                        indexLabel: "{label} : {y}",
                        dataPoints: [

                            { y: response.stats[0].base_stat, label: response.stats[0].stat.name },
                            { y: response.stats[1].base_stat, label: response.stats[1].stat.name },
                            { y: response.stats[2].base_stat, label: response.stats[2].stat.name },
                            { y: response.stats[3].base_stat, label: response.stats[3].stat.name },
                            { y: response.stats[4].base_stat, label: response.stats[4].stat.name },
                        ]
                    }]
                });
                chart.render();
                
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
                
                for (let i = 0; i < 100; i++) {
                    if (response.flavor_text_entries[i].language.name == 'es') {
                        $('.description1').append('<span>' + response.flavor_text_entries[i].flavor_text + '</span>');
                        cuenta++;
                    };
                    if (cuenta  == 1) {
                        break;
                    };
                };
            },
            
            error: function error () {
				//si falla la baina
			}
			
		})

}); // end submit searchPokemon


$('.submit1').click( function searchPokemon (event){
	event.preventDefault();
	$('.type2').empty();
    $('.description2').empty();
    $('.photo2').empty();
    $('.chartContainer2').empty();
    let chart;
    let cuenta = 0;

    var pokemon = $('#poke2').val().toLowerCase();
		$.ajax({
			type: 'GET',
            url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,

			success: function (response) {
				console.log(response);
				response.types.forEach(function (types) {
                    var pokemonType = types.type.name
                    $.ajax({
                        type: 'GET',
                        url: 'https://pokeapi.co/api/v2/type/' + pokemonType,
                        success: function (response){
                            switch (response.names[4].name) {
                                
                                default:
                                    $('.type2').append('<span>' + response.names[4].name + '  </span>');
                                    break;
                            };
                        }

                    })
						
                    });
                
                $('.photo2').append('<img src="'+ response.sprites.front_default +'" alt="">');
                
                chart = new CanvasJS.Chart("chartContainer2", {
                    backgroundColor: "rgba(255, 255, 255, .0)",
                    animationEnabled: true,
                    title:{
                    },
                    data: [{
                        type: "doughnut",
                        startAngle: 60,
                        innerRadius: 20,
                        indexLabelFontSize: 17,
                        indexLabel: "{label} : {y}",
                        dataPoints: [

                            { y: response.stats[0].base_stat, label: response.stats[0].stat.name },
                            { y: response.stats[1].base_stat, label: response.stats[1].stat.name },
                            { y: response.stats[2].base_stat, label: response.stats[2].stat.name },
                            { y: response.stats[3].base_stat, label: response.stats[3].stat.name },
                            { y: response.stats[4].base_stat, label: response.stats[4].stat.name },
                        ]
                    }]
                });
                chart.render();
                
            },
            

			error: function error () {
			}
			
		})

		$.ajax({
			
			type: 'GET',
			
            url: 'http://pokeapi.co/api/v2/pokemon-species/' + pokemon,
            
			
			success: function (response) {

                console.log(response);
                
                for (let i = 0; i < 100; i++) {
                    if (response.flavor_text_entries[i].language.name == 'es') {
                        $('.description2').append('<span>' + response.flavor_text_entries[i].flavor_text + '</span>');
                        cuenta++;
                    };
                    if (cuenta  == 1) {
                        break;
                    };
                };
            },
            
            error: function error () {
				//si falla la baina
			}
			
		})

}); // end submit searchPokemon