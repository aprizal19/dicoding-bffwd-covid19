const numeral = require('numeral');

const indonesiaTable = document.querySelector("#indonesiaTable");

const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = 'https://api.kawalcorona.com/indonesia/provinsi'

const getIndonesiaTable = async () => {
  const response = await fetch(proxyUrl + targetUrl);
  const data = await response.json();
  const setIndonesia = data.map((indonesia) => ({
    name: indonesia.attributes.Provinsi,
    cases: indonesia.attributes.Kasus_Posi,
    recovered: indonesia.attributes.Kasus_Semb,
    deaths: indonesia.attributes.Kasus_Meni,
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

  setIndonesia.sort(sortData("cases"));
  let temp = "";
  for (let item in setIndonesia) {
    temp += "<tr>";
    temp += "<td>" + setIndonesia[item].name + "</td>";
    temp += "<td>" + numeral(setIndonesia[item].cases).format('0,0') + "</td>";
    temp += "<td>" + numeral(setIndonesia[item].recovered).format('0,0') + "</td>";
    temp += "<td>" + numeral(setIndonesia[item].deaths).format('0,0') + "</td>";
  }
  indonesiaTable.innerHTML = temp;
};

export default getIndonesiaTable;