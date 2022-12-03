const path = require('path');
const fs = require('fs').promises;

const contactsPath = path.resolve('./db/contacts.json')

function listContacts() {   
    fs.readFile(contactsPath, 'utf8')
    .then(data => {
            const contacts = JSON.parse(data).contacts
            contacts.forEach(contact => {
                console.log(`Name: ${contact.name}, phone number is ${contact.phone}`);
            });;
        })
        .catch(err => console.log("Ошибка" + err));
}

function addContact(name, phone) {
    fs.readFile(contactsPath, 'utf8')
        .then(data => {
            // const contacts = JSON.parse(data).contacts;
            const listOfNewContacts = [...JSON.parse(data).contacts]
            listOfNewContacts.push({ name, phone })
            console.log('listOfNewContacts', listOfNewContacts);
            console.log(JSON.stringify({contacts: listOfNewContacts}));
            fs.writeFile(contactsPath, JSON.stringify({contacts: listOfNewContacts})).then(data => console.log('Operation success'))
                .catch(err => console.log(`ERRROOOOOR!!!!!!! ${err}`))
        })
        .catch(err => console.log(`Ошибка ${err}`));
}


function removeContact(nameToFilter) {
    fs.readFile(ctontactsPath, 'utf8').then(data => {
        const parsedData = JSON.parse(data);
        console.log(parsedData.contacts.filter(({ name }) => name !== nameToFilter));
        const filteredData = parsedData.contacts.filter(({ name }) => name !== nameToFilter)
        const newFile = parsedData.contacts = 
        fs.writeFile(conactsPath, ).then(data => console.log('Operation success'))
                .catch(err => console.log(`ERRROOOOOR!!!!!!! ${err}`))
    })
}
module.exports = {listContacts, addContact, removeContact}