 for (let i = 1; i < 200; i++) {
    $.ajax({
        type: 'GET',
        url: '//pokeapi.co/api/v2/pokemon/' + i,
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
            url: '//pokeapi.co/api/v2/pokemon/' + pokemon,

			success: function (response) {
				console.log(response);
				response.types.forEach(function (types) {

                    var pokemonType = types.type.name

                    switch (pokemonType) {
                        case 'fire':
                            $('.type1').append(`<img src="./asset/img/TypePoke/fire_es.png" alt="">`);
                            break;
                        case 'bug':
                            $('.type1').append(`<img src="./asset/img/TypePoke/bug_es.png" alt="">`);
                            break; 
                        case 'dark':
                            $('.type1').append(`<img src="./asset/img/TypePoke/dark_es.png" alt="">`);
                            break;  
                        case 'dragon':
                            $('.type1').append(`<img src="./asset/img/TypePoke/dragon_es.png" alt="">`);
                            break;
                        case 'electric':
                            $('.type1').append(`<img src="./asset/img/TypePoke/electric_es.png" alt="">`);
                            break;
                        case 'fairy':
                            $('.type1').append(`<img src="./asset/img/TypePoke/fairy_es.png" alt="">`);
                            break;
                        case 'fighting':
                            $('.type1').append(`<img src="./asset/img/TypePoke/fighting_es.png" alt="">`);
                            break;
                        case 'flying':
                            $('.type1').append(`<img src="./asset/img/TypePoke/flying_es.png" alt="">`);
                            break;
                        case 'ghost':
                            $('.type1').append(`<img src="./asset/img/TypePoke/ghost_es.png" alt="">`);
                            break;
                        case 'grass':
                            $('.type1').append(`<img src="./asset/img/TypePoke/grass_es.png" alt="">`);
                            break;
                        case 'ground':
                            $('.type1').append(`<img src="./asset/img/TypePoke/ground_es.png" alt="">`);
                            break;
                        case 'ice':
                            $('.type1').append(`<img src="./asset/img/TypePoke/ice_es.png" alt="">`);
                            break;
                        case 'normal':
                            $('.type1').append(`<img src="./asset/img/TypePoke/normal_es.png" alt="">`);
                            break;
                        case 'poison':
                            $('.type1').append(`<img src="./asset/img/TypePoke/poison_es.png" alt="">`);
                            break;
                        case 'psychic':
                            $('.type1').append(`<img src="./asset/img/TypePoke/psychic_es.png" alt="">`);
                            break;
                        case 'rock':
                            $('.type1').append(`<img src="./asset/img/TypePoke/rock_es.png" alt="">`);
                            break;
                        case 'steel':
                            $('.type1').append(`<img src="./asset/img/TypePoke/steel_es.png" alt="">`);
                            break;
                        case 'water':
                            $('.type1').append(`<img src="./asset/img/TypePoke/water_es.png" alt="">`);
                            break;
                    };
	
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

                            { y: response.stats[0].base_stat, label: 'Vida' },
                            { y: response.stats[1].base_stat, label: 'Ataque' },
                            { y: response.stats[2].base_stat, label: 'Defensa' },
                            { y: response.stats[3].base_stat, label: 'Ataque especial' },
                            { y: response.stats[4].base_stat, label: 'Defensa especial' },
                            { y: response.stats[5].base_stat, label: 'Velocidad' }
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
            url: '//pokeapi.co/api/v2/pokemon-species/' + pokemon,
			
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
            url: '//pokeapi.co/api/v2/pokemon/' + pokemon,

			success: function (response) {
				console.log(response);
				response.types.forEach(function (types) {
                    var pokemonType = types.type.name
                    
                    switch (pokemonType) {
                        case 'fire':
                            $('.type2').append(`<img src="./asset/img/TypePoke/fire_es.png" alt="">`);
                            break;
                        case 'bug':
                            $('.type2').append(`<img src="./asset/img/TypePoke/bug_es.png" alt="">`);
                            break; 
                        case 'dark':
                            $('.type2').append(`<img src="./asset/img/TypePoke/dark_es.png" alt="">`);
                            break;  
                        case 'dragon':
                            $('.type2').append(`<img src="./asset/img/TypePoke/dragon_es.png" alt="">`);
                            break;
                        case 'electric':
                            $('.type2').append(`<img src="./asset/img/TypePoke/electric_es.png" alt="">`);
                            break;
                        case 'fairy':
                            $('.type2').append(`<img src="./asset/img/TypePoke/fairy_es.png" alt="">`);
                            break;
                        case 'fighting':
                            $('.type2').append(`<img src="./asset/img/TypePoke/fighting_es.png" alt="">`);
                            break;
                        case 'flying':
                            $('.type2').append(`<img src="./asset/img/TypePoke/flying_es.png" alt="">`);
                            break;
                        case 'ghost':
                            $('.type2').append(`<img src="./asset/img/TypePoke/ghost_es.png" alt="">`);
                            break;
                        case 'grass':
                            $('.type2').append(`<img src="./asset/img/TypePoke/grass_es.png" alt="">`);
                            break;
                        case 'ground':
                            $('.type2').append(`<img src="./asset/img/TypePoke/ground_es.png" alt="">`);
                            break;
                        case 'ice':
                            $('.type2').append(`<img src="./asset/img/TypePoke/ice_es.png" alt="">`);
                            break;
                        case 'normal':
                            $('.type2').append(`<img src="./asset/img/TypePoke/normal_es.png" alt="">`);
                            break;
                        case 'poison':
                            $('.type2').append(`<img src="./asset/img/TypePoke/poison_es.png" alt="">`);
                            break;
                        case 'psychic':
                            $('.type2').append(`<img src="./asset/img/TypePoke/psychic_es.png" alt="">`);
                            break;
                        case 'rock':
                            $('.type2').append(`<img src="./asset/img/TypePoke/rock_es.png" alt="">`);
                            break;
                        case 'steel':
                            $('.type2').append(`<img src="./asset/img/TypePoke/steel_es.png" alt="">`);
                            break;
                        case 'water':
                            $('.type2').append(`<img src="./asset/img/TypePoke/water_es.png" alt="">`);
                            break;
                        };
						
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

                            { y: response.stats[0].base_stat, label: 'Vida' },
                            { y: response.stats[1].base_stat, label: 'Ataque' },
                            { y: response.stats[2].base_stat, label: 'Defensa' },
                            { y: response.stats[3].base_stat, label: 'Ataque especial' },
                            { y: response.stats[4].base_stat, label: 'Defensa especial' },
                            { y: response.stats[5].base_stat, label: 'Velocidad' }
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
			
            url: '//pokeapi.co/api/v2/pokemon-species/' + pokemon,
            
			
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