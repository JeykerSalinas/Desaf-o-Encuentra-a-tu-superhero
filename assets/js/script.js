// const myButton = document.getElementById("myButton")
// const myHero = document.getElementById("myHero")

const myConsulta = (inputHero, DATABASE) => {
  $.ajax({
    // Endpoint API
    url: `${DATABASE}${inputHero}.json`,
    type: "GET",
    dataType: "JSON",
    success: (data) => {
      let myData = data;
      // Creando el gráfico de torta
      const chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: `${myData.name} Power Stats`,
        },
        data: [
          {
            type: "pie",
            startAngle: 180,
            yValueFormatString: '##0""',
            indexLabel: "{label} {y}",
            dataPoints: [
              { y: myData.powerstats.combat, label: "Combat" },
              { y: myData.powerstats.durability, label: "Durability" },
              { y: myData.powerstats.intelligence, label: "Intelligence" },
              { y: myData.powerstats.power, label: "Power" },
              { y: myData.powerstats.speed, label: "Speed" },
              { y: myData.powerstats.strength, label: "Strenght" },
            ],
          },
        ],
      });
      //Creando card para super heroe
      const myCard = `
      <div id="cardContainer" class="col-6 card">
      <div class="row g-0">
      <div class="col-md-4 d-flex justify-center align-items-center">
          <img src="${myData.images.lg}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Aliases: ${myData.biography.aliases} </li>
              <li class="list-group-item">Alignment: ${myData.biography.alignment}</li>
              <li class="list-group-item">Alter-egos: ${myData.biography.alterEgos} </li>
              <li class="list-group-item">First appearence: ${myData.biography.firstAppearance}</li>
              <li class="list-group-item">Full name: ${myData.biography.fullName}</li>
              <li class="list-group-item">Born in: ${myData.biography.placeOfBirth} </li>
              <li class="list-group-item">Publisher: ${myData.biography.publisher} </li>
            </ul>
          </div>
        </div>
      </div>
    </div>`;

      $("#myImg").toggle(false);
      $("#heroName").replaceWith(
        `<h2 id="heroName" class="col-12 text-center my-2">${myData.name}</h2>`
      );
      $("#cardContainer").replaceWith(myCard);
      chart.render();
    },
    error: () => {
      $("#myImg").toggle(true);
      $("#heroName").replaceWith(
        `<span id="heroName" class="badge bg-danger col-6 mx-auto">SuperHero no encontrado, por favor repita la búsqueda</span>`
      );
      $("#cardContainer").replaceWith(`<div id="cardContainer"></div>`);
      $("#chartContainer").replaceWith(
        `<div id="chartContainer" class="col-6"></div>`
      );
    },
  });
};

$(document).ready(function () {
  $("#myButton").on("click", () => {
    const myHero = $("#myHero").val();
    const URLBASE = "https://akabab.github.io/superhero-api/api/id/";
    myConsulta(myHero, URLBASE);
  });
});

//Falta el gráfico de torta, y arreglarlo para cuando haya un error, y para que aparezca el nombre del personaje y se vea el grafico
//usar innerHTML para inyectar el texto nuevo con todo y etiquetas
//repend y apend para agragar y quitar las cosas de html
//como es la propiedad de ajax para el error??
