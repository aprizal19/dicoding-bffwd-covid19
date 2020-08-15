import "regenerator-runtime";

import "bootstrap/dist/css/bootstrap.min.css";
import "./component/my-navbar.js";
import "./component/my-carousel.js";
import "./component/my-footer.js";
import globalData from "./script/global-data.js";
import getGlobalTable from "./script/global-table.js";
import indonesiaData from "./script/indonesia-data.js";
import getIndonesiaTable from "./script/indonesia-table.js";
import coronavirusBannerImg from "./images/coronavirus-banner.png";
import preventionImg from "./images/prevention.png";
import stayStrongImg from "./images/stay-strong.png";
import wearMaskImg from "./images/wear-mask.png";

globalData();
getGlobalTable();
indonesiaData();
getIndonesiaTable();
document.querySelector("#coronavirusBanner").src = coronavirusBannerImg;
document.querySelector("#preventionCorona").src = preventionImg;
document.querySelector("#stayStrong").src = stayStrongImg;
document.querySelector("#wearMask").src = wearMaskImg;