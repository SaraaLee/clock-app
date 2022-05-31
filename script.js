// Suerte :)  preguntar a oscar definicion estado de la app, variables que en funcion de como cambia su valor cambia la interfaz del usuario

// declaramos la variable que tendra el DOM donde iran las citas

let citas = document.querySelector("#quote");
let autor = document.querySelector(".author");

async function citaRandom(){

    let url = "https://api.quotable.io/random/";

    let response = await fetch(url);
    //console.log(response);

    let cita = await response.json()
    //console.log(cita);

    citas.textContent = cita.content;
    autor.textContent = cita.author;

}

citaRandom();

// vamos a crear el boton de refresh 

let botonRefresh = document.querySelector("#refresh");

botonRefresh.addEventListener("click", function(){
    citaRandom();
})


// vamos a atacar la geolocalizacion

let pais = document.querySelector(".region");

async function paisIP(){

    let url = "https://freegeoip.app/";
    let response = await fetch (url);




}




