function createContact() {
    const contact = document.createElement('section');
    main.appendChild(contact);

    const phone = document.createElement('div');
    phone.innerText = "(123) 456-7890"
    phone.classList.add("contact-info");
    contact.appendChild(phone);

    const address = document.createElement('div');
    address.innerText = "123 Main St. New York City, New York 54321"
    address.classList.add("contact-info");
    contact.appendChild(address);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}

export default loadContact;