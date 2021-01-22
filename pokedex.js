$('#search').on('click', (e) =>{
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
});