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

// hourly sales * random number
function hourlySales(min, max, avgcookies) {
    let arraySales = [];
    for (i = 0; i < timeSlots.length; i += 1) {
        let value = getRandomInt(min, max)
        let cookieSales = Math.floor(value * avgcookies);
        arraySales.push(cookieSales);
    }
    console.log(arraySales);
    return arraySales;
}

CookieStand.stores = [];

// define a cookie stand
function CookieStand(location, hourlySales) {
    console.log(location, hourlySales);
    this.location = location;
    this.hourlySales = hourlySales;
    CookieStand.stores.push(this);
}


// display cookie stand data
let renderHeader = function () {

    // rows for the table
    // 'store-container' is the div id in HTML
    const profileContainer = document.getElementById('store-container');
    const article = createChild('article', profileContainer);
    const table = createChild('table', article, undefined, 'cookieTable');
    const headerRow = createChild('tr', table);

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
}


// CookieStand Constructor
CookieStand.prototype.render = function () {
    let cityTotal = 0;
    const table = document.getElementById('cookieTable');


    // data row (adds cookies sold into data cells)
    const dataRow = createChild('tr', table);

    createChild('td', dataRow, this.location);

    for (let i = 0; i < this.hourlySales.length; i += 1) {
        cityTotal += this.hourlySales[i];
        createChild('td', dataRow, this.hourlySales[i]);
        if (i === (this.hourlySales.length - 1)) {
            createChild('td', dataRow, cityTotal);
        }
    }

}


// Calculate hourly totals
renderfooter = function () {
    const table = document.getElementById('cookieTable');
    const tr = createChild('tr', table, 'Hourly Total');
    let total = 0;
    for (let i = 0; i < timeSlots.length; i += 1) {
        let timeTotal = 0
        for (let j = 0; j < CookieStand.stores.length; j += 1) {
            timeTotal += CookieStand.stores[j].hourlySales[i];

        }
        total += timeTotal;
        // console.log(timeTotal);
        createChild('td', tr, timeTotal);
    }
    createChild('td', tr, total);
}



// function for creating child
function createChild(tag, parent, text, id) {
    const child = document.createElement(tag);
    parent.appendChild(child);

    if (text !== undefined) {
        child.textContent = text;
    }
    if (id !== undefined) {
        child.setAttribute('id', id);
    }
    return child;
}


// cookie stand locations and info
let seattle = new CookieStand('Seattle', hourlySales(23, 65, 6.3));
let tokyo = new CookieStand('Tokyo', hourlySales(3, 24, 1.2));
let dubai = new CookieStand('Dubai', hourlySales(11, 38, 3.7));
let paris = new CookieStand('Paris', hourlySales(20, 38, 2.3));
let lima = new CookieStand('Lima', hourlySales(2, 16, 4.6));


// add new location with form

const cookieStandForm = document.getElementById('cookie-form');
cookieStandForm.addEventListener('submit', addcookieStandHandler);

function addcookieStandHandler(event) {
    event.preventDefault();

    const newStandLocation = event.target.newStandLocation.value;
    const newStandMinCookies = parseInt(event.target.newStandMinCookies.value);
    const newStandMaxCookies = parseInt(event.target.newStandMaxCookies.value);
    const avgCookiesSold = parseInt(event.target.avgCookiesSold.value);
console.log(newStandMinCookies, newStandMaxCookies, avgCookiesSold, typeof avgCookiesSold)
    const newCookieStand = new CookieStand(newStandLocation, hourlySales(newStandMinCookies, newStandMaxCookies, avgCookiesSold));
    // CookieStand.stores.push(newCookieStand);
    console.log('new cookie stand', newCookieStand);

    const table = document.getElementById('store-container');
    table.innerHTML = '';
    renderHeader();
    for (let i = 0; i < CookieStand.stores.length; i += 1){
        CookieStand.stores[i].render();
    }
    renderfooter();
    event.target.reset();
}


renderHeader();
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
renderfooter();

