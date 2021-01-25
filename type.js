$.ajax({
    type: 'GET',
    url: '//pokeapi.co/api/v2/type',
    success:function(response){
        let cantidadTipos;
        cantidadTipos = response.count

        for (let i = 0; i <= cantidadTipos; i++) {
            $.ajax({
                type: 'GET',
                url: '//pokeapi.co/api/v2/type/' + i,
                success: (response) => {
                    $('#type').append('<option value="' + i +'">' + response.names[4].name.toUpperCase() + '</option>');
                } 
            })
            
        }

    }
});

$('select').on('change',(e) => {
    e.preventDefault();
    $('#listPoke').empty();
    let tipo = $('#type').val().toLowerCase();
    $.ajax({
        type: 'GET',
        url: '//pokeapi.co/api/v2/type/' + tipo,
        success:(response)=>{
            response.pokemon.forEach(element => {
                let pokes = element.pokemon.name;
                $.ajax({
                    type: 'GET',
                    url: '//pokeapi.co/api/v2/pokemon/' + pokes,
                    success: (response) => {
                        console.log(response);
                        if (response.sprites.other.dream_world.front_default != null) {
                            $('#listPoke').append(`
                            <div class="col-3 pokeType">
                                <h6> ${response.name.toUpperCase()}</h6>
                                <div class="photo1">
                                    <img src="${response.sprites.other.dream_world.front_default}" alt="">
                                </div>
                                <p>Altura: ${(response.height * 10)} cm </p>
                                <p>Peso: ${(response.weight / 10)} Kg </p>
						    </div>`);
                        }
                    }
                })
            });

            
        }
    })
});
