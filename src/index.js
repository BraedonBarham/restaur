import './styles.css';
import header from './sharedCode.js';
import homePage from './home.js';
import aboutPage from './about.js'
import menuPage from './menu.js'



function goToHome(){
    resetPage()
    homePage()
addEventListeners();

}
function goToMenu(){
    resetPage()
    menuPage()
addEventListeners();

}
function goToAbout(){
    resetPage()
    aboutPage()
addEventListeners();

}

function resetPage(){
    const body = document.querySelector("body");

    const contentDiv = document.getElementById("content");
    contentDiv.remove();

    const newContentDiv = document.createElement('div');
    newContentDiv.setAttribute('id', "content");

    body.appendChild(newContentDiv);
}

function addEventListeners(){
    const homeBtn = document.getElementById("home-button");
    homeBtn.addEventListener("click", () => {
        console.log("home");
        goToHome()
    });
    const aboutBtn = document.getElementById("about-button");
    aboutBtn.addEventListener("click", () => {
        console.log("about");
        goToAbout()
    });
    const menuBtn = document.getElementById("menu-button");
    menuBtn.addEventListener("click", () => {
        console.log("menu");
        goToMenu()
    });

}


goToHome();
addEventListeners();