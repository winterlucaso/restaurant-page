import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact";

function createBody() {
    // const body = document.querySelector('#body');

    body.style.backgroundImage = "url(images/fancy-restaurant.jpeg)";
    body.style.backgroundSize = "100% 100%";

    // const restaurantImg = document.createElement('img');
    // restaurantImg.src = "images/fancy-restaurant.jpeg";
    // restaurantImg.alt = "Fancy Restaurant"
    // body.appendChild(restaurantImg);

    return;
}

function createHeader() {
    const header = document.createElement('header');
    header.innerText = "Beeeeans";
    body.appendChild(header);

    return header;
}

function createNav() {
    const nav = document.createElement('nav');
    body.appendChild(nav);

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-button');
    homeBtn.innerText = "Home";
    nav.appendChild(homeBtn);
    nav.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-tab")) {
            return;
        }
        setActiveTab(homeBtn);
        loadHome();
    })

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-button');
    menuBtn.innerText = "Menu";
    nav.appendChild(menuBtn);
    nav.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-tab")) {
            return;
        }
        setActiveTab(menuBtn);
        loadMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-button');
    contactBtn.innerText = "Contact";
    nav.appendChild(contactBtn);
    nav.addEventListener("click", (e) => {
        if (e.target.classList.contains("active-tab")) {
            return;
        }
        setActiveTab(contactBtn);
        loadContact();
    })

    return nav;
}

function createMain() {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    body.appendChild(main);

    return main;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.innerText = "Odin Project";
    body.appendChild(footer);

    return footer;
}

function setActiveTab(button) {
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach((button) => {
        if (button !== this){
            button.classList.remove('active-tab');
        }
    })
    button.classList.add('active-tab');
    // console.log("Active Button: " + button.innerText);
}

function initializeWebsite() {
    const body = document.querySelector('#body');
    createBody();
    body.appendChild(createHeader());
    body.appendChild(createNav());
    body.appendChild(createMain());
    body.appendChild(createFooter());

    setActiveTab(document.querySelector(".nav-button"));

    loadHome();
}



export default initializeWebsite;