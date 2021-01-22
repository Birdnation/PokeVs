/* $('#search').on('click', (e) =>{
    $('#imagenGrande').empty();
    $('#imgPeke1').empty();
    $('#imgPeke2').empty();
    $('#desciption').empty();
    e.preventDefault();
    let pokemon = $('#pokemon').val().toLowerCase();
    $.ajax({
        type: 'GET',
        url: '//pokeapi.co/api/v2/pokemon/' + pokemon,
        success:(response)=>{
            console.log(response);
            $('.nombre').append(`<h1 class='nombre'>Nombre</h1>`);
            $('#imagenGrande').append(`<img class='imgPrincipal' src="${response.sprites.other.dream_world.front_default}" alt="">`);
            $('#imgPeke1').append(`<img src="${response.sprites.front_default}" alt="">`);
            $('#imgPeke2').append(`<img src="${response.sprites.back_default}" alt="">`);
        }
    })
}); */

$(document).ready(function () {
    
    for (let i = 1; i<152; i++) {
        $.ajax({
            type: "GET",
            url: "//pokeapi.co/api/v2/pokemon/" + i,
            dataType: "json",
            crossDomain: true,
            success: function (response) {
                $("#pokemonElegido").append('<option>' + response.name + '</option>');
              
            }
        });
    }

    
    $("#buscar").click(function (e) { 
        e.preventDefault();
        var pokemon = $('#pokemonElegido').val();
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