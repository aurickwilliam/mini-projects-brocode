const pokemon = document.getElementById("name-pokemon");
const searchBtn = document.getElementById("searchBtn");
const img = document.getElementById("pokemon-img");

searchBtn.addEventListener("click", event => {
    pokeDex(pokemon.value.toLowerCase());
});


const pokeDex = async (pokemon) => {
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

        if (!response.ok){
            throw new Error("404 Not Found!");
        }

        const data = await response.json();
        console.log(data);
        img.style.display = "block";
        img.src = data.sprites.front_default;
    }
    catch(Error){
        alert("404 NOT FOUND");
    }
}