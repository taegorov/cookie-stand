// time slot array
const timeSlots = [
    '6am: ',
    '7am: ',
    '8am: ',
    '9am: ',
    '10am: ',
    '11am: ',
    '12pm: ',
    '1pm: ',
    '2pm: ',
    '3pm: ',
    '4pm: ',
    '5pm: ',
    '6pm: ',
    '7pm: ',
];

// random number generator
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function hourlySales(min, max, avgcookies) {
    let arraySales = [];
    for (i = 0; i < timeSlots.length; i += 1){
        let value = getRandomInt(min, max)
        let cookieSales = Math.floor(value * avgcookies);
        arraySales.push(cookieSales);
    }
        console.log(arraySales);
        return arraySales;
}


// define a cookie stand
function CookieStand(location, hourlySales) {
    console.log(location, hourlySales);
    this.location = location;
    this.hourlySales = hourlySales;
}

// display cookie stand data
CookieStand.prototype.render = function(){
    const profileContainer = document.getElementById('store-container');
    const article = createChild('article', profileContainer);

    const table = createChild('table', article);
    const tableHead = createChild('tableHead', table);

    // rows for the table
    const headerRow = createChild('thead', tableHead);

    createChild('th', headerRow, ' ');
    createChild('th', headerRow, '6:00am');
    createChild('th', headerRow, '7:00am');
    createChild('th', headerRow, '8:00am');
    createChild('th', headerRow, '9:00am');
    createChild('th', headerRow, '10:00am');
    createChild('th', headerRow, '11:00am');
    createChild('th', headerRow, '12:00pm');
    createChild('th', headerRow, '1:00pm');
    createChild('th', headerRow, '2:00pm');
    createChild('th', headerRow, '3:00pm');
    createChild('th', headerRow, '4:00pm');
    createChild('th', headerRow, '5:00pm');
    createChild('th', headerRow, '6:00pm');
    createChild('th', headerRow, '7:00pm');
    createChild('th', headerRow, 'Daily Location Total');

    // data row
    const dataRow = createChild('tr', tableHead);

    createChild('td', dataRow, this.location);

    for (let i = 0; i < this.hourlySales.length; i += 1){
    createChild('td', dataRow, this.hourlySales[i]);
    }

    // footer row
    const footerRow = createChild('tfoot', table);
    createChild('th', footerRow, ' ');
    createChild('th', footerRow, '6:00am');
    createChild('th', footerRow, '7:00am');
    // createChild('tfoot', footerRow, this.location);

    // for (let i = 0; i < this.hourlySales.length; i += 1){
    // createChild('tfoot', footerRow, this.hourlySales[i]);
    // }


 
}

// function for creating child
function createChild(tag, parent, text) {
    const child = document.createElement(tag);
    parent.appendChild(child);

    if(text !== undefined) {
        child.textContent = text;
    }
    return child;
}



// cookie stand locations and info
let seattle = new CookieStand('Seattle', hourlySales(23, 65, 6.3));
// const seattle = {
//     location: 'Seattle',
//     hourlySales: hourlySales(23, 65, 6.3),
// }

let tokyo = new CookieStand('Tokyo', hourlySales(3, 24, 1.2));
// const tokyo = {
//     location: 'Tokyo',
//     hourlySales: hourlySales(3, 24, 1.2),
// }

let dubai = new CookieStand('Dubai', hourlySales(11, 38, 3.7));
// const dubai = {
//     location: 'Dubai',
//     hourlySales: hourlySales(11, 38, 3.7),
// }

let paris = new CookieStand('Paris', hourlySales(20, 38, 2.3));
// const paris = {
//     location: 'Paris',
//     hourlySales: hourlySales(20, 38, 2.3),
// }

let lima = new CookieStand('Lima', hourlySales(2, 16, 4.6));
// const lima = {
//     location: 'Lima',
//     hourlySales: hourlySales(2, 16, 4.6),
// }

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


// const storeContainerElem = document.getElementById('store-container')

// // createCookieStand(seattle);
// // createCookieStand(tokyo);
// createCookieStand(dubai);
// createCookieStand(paris);
// createCookieStand(lima);

// // per cookie stand code
// function createCookieStand(cookieStand) {

// const sectionElem = document.createElement('section');
// storeContainerElem.appendChild(sectionElem);

// const locationElem = document.createElement('h2');
// sectionElem.appendChild(locationElem);
// locationElem.textContent = cookieStand.location;

// const hourListElem = document.createElement('ul');
// sectionElem.appendChild(hourListElem);

// for(let i = 0; i < timeSlots.length; i +=1) {
//     const hourItemElem = document.createElement('li');
//     hourListElem.appendChild(hourItemElem);
//     const currentTimeSlot = timeSlots[i];
//     const currentSales = cookieStand.hourlySales[i]; 

//     hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
// }

// let total = 0
// for(let i = 0; i < cookieStand.hourlySales.length; i +=1) {
//     const currentSales = cookieStand.hourlySales[i];
//     total += currentSales;
// }

// const totalItemElem = document.createElement('li');
// hourListElem.appendChild(totalItemElem);
// totalItemElem.textContent = 'Total: ' + total + ' cookies';
// }