function createHome() {
    const home = document.createElement('section');
    main.appendChild(home);

    const chefImg = document.createElement('img');
    chefImg.src = "images/remy.png";
    chefImg.alt = "Chef Remy";
    chefImg.classList.add("chefImg");
    home.appendChild(chefImg);

    const chefText = document.createElement('div');
    chefText.innerText = "Chef Remy";
    home.appendChild(chefText);

    return home;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;