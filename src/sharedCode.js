
function makeNavBar(){
    const header = document.createElement('header');
    header.setAttribute('id', 'header');
    const navBar = document.createElement('nav');
    navBar.setAttribute('id', 'nav-bar');
    const homeBtn = makeButton("home-button", "nav-button", "Home");
    const menuBtn = makeButton("menu-button", "nav-button", "Menu");
    const aboutBtn = makeButton("about-button", "nav-button", "About");

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(aboutBtn);

    header.appendChild(navBar);

    return header;
}

function makeButton(btnID, btnClass, btnText){
    const btn = document.createElement('button');
    btn.setAttribute('id', btnID)
    btn.setAttribute('class', btnClass)
    btn.textContent = btnText
    return btn;
}

function makePageTitle(titleText){
    const title = document.createElement('h1');
    title.setAttribute('class', 'title-class');
    title.textContent = titleText;
    return title;
}

function makeSpacingDiv(){
    const contentDiv = document.getElementById('content');
    const spacingDiv = document.createElement('div');
    spacingDiv.setAttribute('id', 'spacing-div');
    return spacingDiv;
}

function makeContentBox(textContent){
    const contentBox = document.createElement('div');
    contentBox.setAttribute('class', 'content-box');
    contentBox.textContent = textContent;
    return contentBox;
}

export {makePageTitle, makeSpacingDiv, makeContentBox, makeNavBar};
export default makeNavBar;
