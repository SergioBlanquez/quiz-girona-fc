const quiz = [
    {
        pregunta: "¿Quien marcó el primer gol de la história del club en primera división?",
        respuestas: ["TATY CASTELLANOS", "CHRISTIAN STUANI", "ALEX GRANELL", "PORTU"]
    },
    {
        pregunta: "¿Cuál fué el resultado de la victoria en Montjuic?",
        respuestas: ["1-4", "2-5", "2-4", "4-1"]
    },
    {
        pregunta: "¿A que equipo pertenecia Portu antes de regresar?",
        respuestas: ["GETAFE", "REAL SOCIEDAD", "VALENCIA", "LEGANÉS"]
    },
    {
        pregunta: "¿Quién marcó un golazo de volea en la semifinal del playoff vs el Eibar?",
        respuestas: ["ADAY BENITEZ", "BORJA GARCIA", "ALEX BAENA", "ARNAU MARTINEZ"]
    },
    {
        pregunta: "¿Cuántos goles a favor consiguió el equipo la temporada 2023/2024",
        respuestas: ["97", "91", "86", "85"]
    }
];

let indiceActual = 0;

let preguntaActual = document.getElementById("pregunta");
let respuestas = [
    document.getElementById("respuesta1"),
    document.getElementById("respuesta2"),
    document.getElementById("respuesta3"),
    document.getElementById("respuesta4"),
]

const botonSiguiente = document.getElementById("next");



//Función para cargar pregunta y sus respuestas
function cargarPregunta(){
    preguntaActual.textContent = quiz[indiceActual].pregunta;

    quiz[indiceActual].respuestas.forEach((respuesta, index) => {
        respuestas[index].textContent = respuesta
    });

    actualizarProgreso()
}

const barraProgreso = document.querySelectorAll(".progreso")

//Actualizar la barra de progreso
function actualizarProgreso(){
    barraProgreso.forEach((barra, index) => {
        if (index +1 <= indiceActual){
            barra.style.backgroundColor = "#a2022c";
        }else{
            barra.style.backgroundColor = "white"
        }
    });
}

//funcion para comprobar las respuestas de las preguntas
function resolver(valor){

    let respuestaUsuario = valor;
    console.log("La respuesta del usuario es: " + valor)

    let user = document.getElementById(respuestaUsuario)

    switch (quiz[indiceActual].pregunta){
        case "¿Quien marcó el primer gol de la história del club en primera división?":
            if (valor === "respuesta2"){ 
                user.style.backgroundColor = "#28fd44";
                user.style.color = "black"
            }else{
                user.style.backgroundColor = "#ff0909";
            }
        break;

        case "¿Cuál fué el resultado de la victoria en Montjuic?":
            if (valor === "respuesta3"){
                user.style.backgroundColor = "#28fd44";
                user.style.color = "black"
            }else{
                user.style.backgroundColor = "#ff0909";
            }
        break;

        case "¿A que equipo pertenecia Portu antes de regresar?":
            if (valor === "respuesta1"){
                user.style.backgroundColor = "#28fd44";
                user.style.color = "black"
            }else{
                user.style.backgroundColor = "#ff0909";
            }
        break;

        case "¿Quién marcó un golazo de volea en la semifinal del playoff vs el Eibar?":
            if (valor === "respuesta2"){
                user.style.backgroundColor = "#28fd44";
                user.style.color = "black"
            }else{
                user.style.backgroundColor = "#ff0909";
            }
        break;
        
        case "¿Cuántos goles a favor consiguió el equipo la temporada 2023/2024":
            if (valor === "respuesta4"){
                user.style.backgroundColor = "#28fd44";
                user.style.color = "black"
            }else{
                user.style.backgroundColor = "#ff0909";
            }
        break;
        
    }

}

function next(){
    if (indiceActual < quiz.length -1){
        indiceActual++;
        cargarPregunta();
        

        //reseteamos los colores al apretar el boton siguiente
        const todasRespuestas = document.querySelectorAll(".respuestas");
        todasRespuestas.forEach(to => {
            to.style.backgroundColor = "#a2022c";
            to.style.color = "white";
        });

    }else{
        alert("Quiz Completado!")
    }
}




// EventListeners
document.getElementById('respuesta1').addEventListener('click', function(){
    resolver('respuesta1')
})
document.getElementById('respuesta2').addEventListener('click', function(){
    resolver('respuesta2')
})
document.getElementById('respuesta3').addEventListener('click', function(){
    resolver('respuesta3')
})
document.getElementById('respuesta4').addEventListener('click', function(){
    resolver('respuesta4')
})

botonSiguiente.addEventListener('click', next);
