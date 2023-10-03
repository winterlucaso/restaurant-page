function createMenu() {
    const menu = document.createElement('div');
    menu.appendChild(createMenuItem("Baked Beans", "Bean, Bacon, Brisket"));
    menu.appendChild(createMenuItem("Green Beans", "Green Beans, Bacon, Butter"));

    return menu;
}

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add("menu-item");

    const itemName = document.createElement('div');
    itemName.classList.add("item-name");
    itemName.textContent = name;
    const itemDescription = document.createElement('div');
    itemDescription.classList.add("item-description");
    itemDescription.textContent = description;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    

    return menuItem;
}

function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;