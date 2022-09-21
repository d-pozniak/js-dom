const Plants = [
    {
        id: '1',
        commonName: 'Ficus',
        botanicalName: 'Ficus benjamina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: '2',
        commonName: 'Ficus2',
        botanicalName: 'Ficus benjamina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: '3',
        commonName: 'Ficus3',
        botanicalName: 'Ficus benjamina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        id: '4',
        commonName: 'Ficus4',
        botanicalName: 'Ficus benjamina',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
];

const Intro = {
    heading: 'Choose a plant that best suits you!',
    description: 'Learn more onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali',
}
function createTemp(tag, classNames) {
    const tempElem = document.createElement(tag);
    for (const elem of classNames) {
        tempElem.classList.add(elem);
    }
    return tempElem;
}

function createListItems(){
    const itemNames = Plants.map((element) => element.commonName);
    const navList = document.querySelector('.nav-list');
    for(let i=1; i <= itemNames.length; i++){
        const tempItem = createTemp('li', ['nav-list--item']);
        tempItem.id = 'plant' + i;
        navList.insertAdjacentElement('beforeend', tempItem);
    }
    const items = document.querySelectorAll('.nav-list--item');
    items.forEach((element, index) => element.textContent = itemNames[index]);
}

function getElementsToModify(){
    return [document.querySelector('.content-title'),
            document.querySelector('.content-description')];
}

function createIntroContent(){
    const [heading, description] = getElementsToModify();
    heading.textContent = Intro.heading;
    description.textContent = Intro.description;
}

function showPlantInfo(e){
    return function(){
        const plantToShow = Plants.filter((plant) => plant.id === e.id[e.id.length - 1] )[0]; //потрібна рослина-об'єкт
        const [heading, description] = getElementsToModify();
        const tempHeading = createTemp('h2', ['content-heading', 'plant']);
        const tempLatin = createTemp('h3', ['content-subheading'])
        const tempDescr = createTemp('p', ['content-text']);
        tempHeading.textContent = plantToShow.commonName;
        heading.replaceChildren(tempHeading);
        tempDescr
    }
}

function main(){
    createListItems();
    createIntroContent();

    const plants = document.querySelectorAll('.nav-list--item');
    plants.forEach((plant) => plant.addEventListener("click", showPlantInfo(plant)));
}

document.addEventListener("DOMContentLoaded", main);