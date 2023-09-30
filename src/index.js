import './style.css';

const content = document.querySelector('#content');

const header = document.createElement('header');
header.innerText = "Beans";
content.appendChild(header);

const nav = document.createElement('nav');
content.appendChild(nav);

const home = document.createElement('button');
home.innerText = "Home";
nav.appendChild(home);

const menu = document.createElement('button');
menu.innerText = "Menu";
nav.appendChild(menu);

const contact = document.createElement('button');
contact.innerText = "Contact";
nav.appendChild(contact);

const main = document.createElement('main');
content.appendChild(main);

const section = document.createElement('section');
main.appendChild(section);

const remyImg = document.createElement('img');
remyImg.src = "../src/remy.gif";
section.appendChild(remyImg);

const chefText = document.createElement('div');
chefText.innerText = "Chef Remy";
section.appendChild(chefText);

const footer = document.createElement('footer');
footer.innerText = "Odin Project";
content.appendChild(footer);


console.log("testing testing 123");