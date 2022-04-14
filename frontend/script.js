console.log("This is a script file.");

console.log("load");

// console.log(dir);

async function loadEvent() {
  let countriesData = await fetch("https://restcountries.com/v3.1/all");
  let countriesJson = await countriesData.json();
  console.log(countriesJson);

  let countriesSection = document.getElementById("countries");
  //console.dir(countriesSection);
  //countriesSection.innerHTML += "Hali";
  countriesSection.insertAdjacentHTML(
    "beforeend",
    `
  <h1>Countries</h1>
  `
  );

  /*  
  countriesSection.insertAdjacentHTML(
    "beforeend",
    countriesJson[0].name.common
*/

  /*  let countryComponent = `
<div class="country">
    <h2>Ide kerul az orszag neve</h2>
</div>
`;
*/

  function countryComponent(countryName) {
    return `
      <div class="country">
          <h2>${countryName}</h2>
      </div>
      `;
  }

  for (let index = 0; index < countriesJson.length; index++) {
    console.log(index);
    //    countriesSection.insertAdjacentHTML("beforeend",countriesJson[index].name.common);
    countriesSection.insertAdjacentHTML(
      "beforeend",
      countryComponent(countriesJson[index].name.common)
    );
  }
}

window.addEventListener("load", loadEvent);

function logger(logThis) {
  console.log(logThis);
}

logger("Hello");
logger("Hello 2");
logger(8);
logger(true);
