const numeral = require('numeral');

const globalData = () => {
    const globalCases = document.querySelector("#globalCases");
    const globalRecovered = document.querySelector("#globalRecovered");
    const globalDeaths = document.querySelector("#globalDeaths");

    const getGlobalCases = async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/all");
        const data = await response.json();
    
        globalCases.innerHTML = numeral(data.cases).format('0,0');
        globalRecovered.innerHTML = numeral(data.recovered).format('0,0');
        globalDeaths.innerHTML = numeral(data.deaths).format('0,0');
    };

    getGlobalCases();
};

export default globalData;