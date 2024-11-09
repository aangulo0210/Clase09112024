function fechpokemon() {
  const nombrePokemon = document
    .getElementById("pokemon-name")
    .value.toLowerCase();

  if (nombrePokemon === "") {
    alert("Escribe un nombre de Pokemon");
    return;
  }

  fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al obtener el Pokemon");
      }
      return res.json();
    })
    .then((data) => displayPokemon(data))
    .then((data) =>
      displayPokemon(data).catch((error) =>
        console.error("error atrapando el Pokemon: ", error)
      )
    );
}

function displayPokemon(pokemon) {
  const pokemonInfo = document.getElementById("pokemonInformacion");
  pokemonInfo.innerHTML = ` 
<div class="card mb-3">
  <div class="row g-0" id="contenedorPokemon">
    <div class="col-md-4" id="imagenPokemon">
      <img src="${pokemon.sprites.front_default}" class="img-fluid rounded-start" alt="${pokemon.name}" style="width: 10rem;">
    </div>
    <div class="card-body" id="informacionPokemon">
        <h5 class="card-title">Nombre: ${pokemon.name}</h5>
        <p class="card-text">ID: ${pokemon.id}</p>
        <p class="card-text">Altura: ${pokemon.height}</p>
        <p class="card-text">Peso: ${pokemon.weight}</p>
        <p class="h5">Pokemon Atrapado!</p>
    </div>
  </div>
</div>
    `;
}
