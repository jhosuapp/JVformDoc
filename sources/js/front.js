//CSS
import "../sass/main.scss";

//JS COMPONENTS
import { getChildsFuncNav } from "./components/Nav";
import { getChildsFuncTab } from "./components/Tab";

window.addEventListener('load', ()=>{

    getChildsFuncNav();

    getChildsFuncTab();

});