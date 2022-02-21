// const myButton = document.getElementById("myButton")
// const myHero = document.getElementById("myHero")

const myConsulta = (inputHero, DATABASE) => {
  $.ajax({
    // Endpoint API
    url: `${DATABASE}/${inputHero}.json`,
    type: "GET",
    dataType: "JSON",
    success: (data) => {
      console.log(data.name);
      $("#titulo").replaceWith(data.name);
      $("#myImg").attr("src", data.images.lg);
    },
    error: ()=>{
        $("#myImg").attr("src", "./assets/img/Imagen 1.png");    
    }
  });
};

$(document).ready(function () {
  const myHero = $("#myHero").val()
  const URLBASE = "https://akabab.github.io/superhero-api/api/id";

  $("#myButton").on("click", () => {
    console.log(myHero);
    // myConsulta(myHero, URLBASE);
  })
  
  
  ;
});

//Falta el gráfico de torta, y arreglarlo para cuando haya un error, y para que aparezca el nombre del personaje y se vea el grafico
//usar innerHTML para inyectar el texto nuevo con todo y etiquetas
//repend y apend para agragar y quitar las cosas de html
//como es la propiedad de ajax para el error??
