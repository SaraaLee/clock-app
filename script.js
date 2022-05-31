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

let pais = document.querySelector(".currently__location");
let hora = document.querySelector(".time-now");
let period= document.querySelector(".period");

async function geolocalizacion(){

    let url = "https://api.ipbase.com/v2/info?apikey=nq4s0rlIqL9TPWtkdDsywvvGFU63WCJO9rgiF52k&ip=95.17.238.4";
    let response = await fetch (url);
     // console.log(response);
    let geoInfo= await response.json();
    console.log(geoInfo);

    pais.textContent=`in ${geoInfo.data.timezone.id}`;
    period.textContent=geoInfo.data.timezone.code;
    // hora.textContent=geoInfo.data.timezone.current_time;//falta simplificar el formato
    
    let horaSimple= new Date(geoInfo.data.timezone.current_time);
    
    hora.textContent=horaSimple.toLocaleTimeString().substring(0,5);
    
    //almacenar en una variable el substring(0,2) de la hora, convertirlo en numero y usarlo en los condicionales para el gm

    let horaNumber=Number(horaSimple.toLocaleTimeString().substring(0,2));
    // console.log(horaNumber);
    if(horaNumber>20 && horaNumber<6){
        
        let buenasNoches= document.querySelector(".currently__greeting")
            buenasNoches.textContent="Good evening"
    }else{
        
    }



    // if(hora.textContent=="20:31" || hora.textContent=="20:32"){
    //     let buenosDias= document.querySelector(".currently__greeting")
    //     buenosDias.textContent="good morning"
    // }
    



}


geolocalizacion();




// setInterval(geolocalizacion,60000)



