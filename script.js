const mainDiv = document.querySelector('.row.row-cols-1.row-cols-md-3.g-4');
console.log(mainDiv);


function renderCountry(flagUrl, countryName, region, population, language, money){
    const country = `
    <div class="col">
    <div class="card h-100">
      <img src="${flagUrl}" class="card-img-top" alt="img">
        <div class="card-body">
        <h5 class="card-title">${countryName}</h5>
        <p class="card-text">${region}</p>
        <p class="card-text">&#128106; ${population.toFixed(2)}M</p>
        <p class="card-text">&#128483; ${language}</p>
        <p class="card-text">&#128176; ${money}</p>
      </div>
    </div>
    </div>
    `;
    mainDiv.innerHTML += country;
}


fetch('https://restcountries.com/v3.1/all')
.then((response) => {
return response.json();
})

.then((data) => {
console.log(data);

for(let i = 0; i < data.length; i = i + 12) {
    let currency = Object.values(data[i].currencies)[0].name;
    let language = Object.values(data[i].languages);
    console.log(language);
    // console.log(currency);
    renderCountry(data[i].flags.png, data[i].name.official, data[i].region, data[i].population/1000000, Object.values(data[i].languages).join(', '), Object.values(data[i].currencies)[0].name);
}
});