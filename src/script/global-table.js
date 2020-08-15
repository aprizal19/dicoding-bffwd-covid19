const numeral = require('numeral');

const globalTable = document.querySelector("#globalTable");

const getGlobalTable = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  const data = await response.json();
  const setGlobal = data.map((global) => ({
    name: global.country,
    cases: global.cases,
    recovered: global.recovered,
    deaths: global.deaths,
    active: global.active,
  }));

  function sortData(prop) {
    return function (a, b) {
      if (a[prop] < b[prop]) {
        return 1;
      } else if (a[prop] > b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  setGlobal.sort(sortData("cases"));
  let temp = "";
  for (let item in setGlobal) {
    temp += "<tr>";
    temp += "<td>" + setGlobal[item].name + "</td>";
    temp += "<td>" + numeral(setGlobal[item].cases).format('0,0') + "</td>";
    temp += "<td>" + numeral(setGlobal[item].recovered).format('0,0') + "</td>";
    temp += "<td>" + numeral(setGlobal[item].deaths).format('0,0') + "</td>";
    temp += "<td>" + numeral(setGlobal[item].active).format('0,0') + "</td>";
  }
  globalTable.innerHTML = temp;
};

export default getGlobalTable;