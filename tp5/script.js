const err = 'Une erreure est survenue. Réessayez plus tard !';


const getCommunes = (codeDepartement) => {

  //initialisation au chargement de la page
  if (codeDepartement === undefined) {
    const selectDepartement = document.getElementById('departement');
    codeDepartement = parseInt(selectDepartement.options[selectDepartement.selectedIndex].value);
    getCommunes(codeDepartement);
  }

  fetch(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {

      const selectCommune = document.getElementById('commune');
      const list = document.getElementById('list');
      selectCommune.innerHTML = "";
      let selectedPostalCode;
      let totalPopulation;

      json.forEach(commune => {
        selectCommune.innerHTML += '<option value=' + commune.codesPostaux + '>' + commune.nom + '</option>';
      });

      const filterSamePostalCode = (selectedPostalCode) => {
        let arrayPC = json.filter(commune => parseInt(commune.codesPostaux) == selectedPostalCode);
        return arrayPC;
      }

      //Si pas de clic sur une commune :
      let index = selectCommune.selectedIndex;
      let city = json[index].nom;
      let population = json[index].population;
      document.querySelector('#population_label').textContent = population;
      
      sessionStorage.setItem('city', city);

      //Au clic sur une commune :
      selectCommune.addEventListener("change", () => {

        list.innerHTML = '';
        sessionStorage.clear();

        index = selectCommune.selectedIndex;
        city = json[index].nom;
        population = json[index].population;
        document.querySelector('#population_label').textContent = population;
        
        selectedPostalCode = parseInt(json[index].codesPostaux);
        
        let arrayPC = filterSamePostalCode(selectedPostalCode);
        
        for (let i = 0; i < arrayPC.length; i++) {
          list.innerHTML += "<tr><td>" + arrayPC[i].nom + "</td><td>" + arrayPC[i].codesPostaux + "</td><td>" + arrayPC[i].population + "</td></tr>";

          // for(let key in arrayPC) { 
          //   totalPopulation += parseInt(arrayPC[key].population);
          //   console.log(totalPopulation, typeof (arrayPC[key].population));
          // };
          
        }
        let table = document.querySelector('table');
        totalPopulation = 0;
        for(let i = 1; i < table.rows.length; i++)
        {
          totalPopulation = totalPopulation + parseInt(table.rows[i].cells[2].innerHTML);
        }
        document.getElementById('total_label').textContent = totalPopulation;
        
        sessionStorage.setItem('city', city);
      });

    }).catch(err => console.log('Erreur : ' + err));

}


document.getElementById('btnWeather').addEventListener('click', () => {
  window.location = "http://127.0.0.1:5500/meteo/meteo.html";
})


const getDepartements = (codeRegion) => {
  //Departement par défaut
  if (codeRegion === undefined) {
    codeRegion = "01";
  }

  fetch(`https://geo.api.gouv.fr/regions/${codeRegion}/departements`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {

      const selectDepartement = document.getElementById('departement');
      selectDepartement.innerHTML = "";

      json.forEach(data => {
        selectDepartement.innerHTML += '<option value=' + data.code + '>' + data.nom + '</option>';
      });

      selectDepartement.addEventListener("change", () => {
        let codeDepartement = parseInt(selectDepartement.options[selectDepartement.selectedIndex].value);
        getCommunes(codeDepartement);
      })

      getCommunes();


    }).catch(err => console.log('Erreur : ' + err));

}


const getRegion = () => {
  fetch('https://geo.api.gouv.fr/regions', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(json => {

      const selectRegion = document.getElementById('region');

      json.forEach(data => {
        selectRegion.innerHTML += '<option value=' + data.code + '>' + data.nom + '</option>'
      });
      getDepartements();

      selectRegion.addEventListener("change", () => {
        let codeRegion = selectRegion.options[selectRegion.selectedIndex].value;
        getDepartements(codeRegion);


      })


    }).catch(err => console.log('Erreur : ' + err));
}

getRegion();