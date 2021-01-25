$(document).ready(function () {
    
    for (let i = 1; i<300; i++) {
        $.ajax({
            type: "GET",
            url: "//pokeapi.co/api/v2/pokemon/" + i,
            dataType: "json",
            crossDomain: true,
            success: function (response) {
                $("#pokemonElegido").append('<option>' + response.name.toUpperCase() + '</option>');
              
            }
        });
    }


    
    $("#buscar").click(function (e) { 
        e.preventDefault();
        var pokemon = $('#pokemonElegido').val().toLowerCase();
        console.log(pokemon);
        $('#imagenPokemon').empty();
        $('#infoPokemon').empty();
        $.ajax({
            type: "GET",
            url: "//pokeapi.co/api/v2/pokemon/" + pokemon,
            dataType: "json",
            success: function (response) {
                $('#imagenPokemon').append('<img src="' + response.sprites.other.dream_world.front_default + '" alt="">');
                $('#infoPokemon').append('<h3 style="text-align:center"> # ' + response.id +'</h3>')
                $('#infoPokemon').append('<h3 style="text-align:center"> ' + response.name.toUpperCase() +'</h3>')
                $('#infoPokemon').append('<h6 style="text-align:center"> Altura: ' + response.height +' cm</h6>')
                $('#infoPokemon').append('<h6 style="text-align:center"> Peso: ' + response.weight +' g</h6>')
                $('#infoPokemon').append('<h6 style="text-align:center"> Experiencia base: ' + response.base_experience +' </h6>')
                
            }
        });
    });
});

$(document).ready(function() {
    $('.js-example-basic-single').select2();
});