const numeral = require('numeral');

const indonesiaData = () => {
    const indonesiaCases = document.querySelector("#indonesiaCases");
    const indonesiaRecovered = document.querySelector("#indonesiaRecovered");
    const indonesiaDeaths = document.querySelector("#indonesiaDeaths");

    const getIndonesiaData = async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/countries/indonesia");
        const data = await response.json();
    
        indonesiaCases.innerHTML = numeral(data.cases).format('0,0');
        indonesiaRecovered.innerHTML = numeral(data.recovered).format('0,0');
        indonesiaDeaths.innerHTML = numeral(data.deaths).format('0,0');
    };

    getIndonesiaData();
};

export default indonesiaData;