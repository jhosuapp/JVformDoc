//CSS
import "../sass/main.scss";

//JS COMPONENTS
import { getChildsFuncNav } from "./components/Nav";
import { getChildsFuncTab } from "./components/Tab";
import { getChildsFuncCopyCode } from "./components/CopyCode";

window.addEventListener('load', ()=>{

    getChildsFuncNav();

    getChildsFuncTab();

    getChildsFuncCopyCode();

});