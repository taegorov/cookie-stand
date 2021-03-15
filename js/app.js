// Stores the min/max hourly customers, and the average cookies per customer, in object properties

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

const seattle = {
    location: 'Seattle',
    hourlySales: [4, 2, 3, 4, 6, 7, 12, 2, 43, 23, 5, 13, 56, 3],
    minCustomers: '23',
    maxCustomers: '65',
    avgCookieSale: '6.3',
    // Uses a method of that object to generate a random number of customers per hour. Objects/Math/random
    // RNG borrowed from Code Fellows instructor Roger Huba
    hourlyCustomers: Math.floor(Math.random() * 10) + 1,
    cookiesPurchased: '', //per hour
}

const tokyo = {
    location: 'Tokyo',
    hourlySales: [4, 2, 3, 4, 6, 7, 12, 2, 43, 23, 5, 13, 56, 3],
    minCustomers: '3',
    maxCustomers: '24',
    avgCookieSale: '1.2',
    hourlyCustomers: Math.floor(Math.random() * 10) + 1,
    cookiesPurchased: '', //per hour
}

const dubai = {
    location: 'Dubai',
    hourlySales: [4, 2, 3, 4, 6, 7, 12, 2, 43, 23, 5, 13, 56, 3],
    minCustomers: '3',
    maxCustomers: '24',
    avgCookieSale: '1.2',
    hourlyCustomers: Math.floor(Math.random() * 10) + 1,
    cookiesPurchased: '', //per hour
}

const paris = {
    location: 'Paris',
    hourlySales: [4, 2, 3, 4, 6, 7, 12, 2, 43, 23, 5, 13, 56, 3],
    minCustomers: '3',
    maxCustomers: '24',
    avgCookieSale: '1.2',
    hourlyCustomers: Math.floor(Math.random() * 10) + 1,
    cookiesPurchased: '', //per hour
}

const lima = {
    location: 'Lima',
    hourlySales: [4, 2, 3, 4, 6, 7, 12, 2, 43, 23, 5, 13, 56, 3],
    minCustomers: '3',
    maxCustomers: '24',
    avgCookieSale: '1.2',
    hourlyCustomers: Math.floor(Math.random() * 10) + 1,
    cookiesPurchased: '', //per hour
}

// CURRENT COOKIE STAND LOCATION
// const cookieStand = tokyo;


// // const seattleProfileElem = document.createElement('seattleProfile');
// const seattleProfileElem = document.getElementById('seattleProfile');

// function createCity(){
// seattleProfileElem.textContent = 'Seattle JS';
//     const articleElem = document.createElement('article');
//     const nameHeaderElem = document.createElement('h2');
//     articleElem.appendChild(nameHeaderElem);
//     nameHeaderElem.textContent = seattle.name;
// }



// // JB's code
// const kittenProfilesElem = document.getElementById('kittenProfiles');

// function createKitty() {
//   const articleElem = document.createElement('article');

//   const nameHeaderElem = document.createElement('h2');
//   articleElem.appendChild(nameHeaderElem);
//   nameHeaderElem.textContent = seattle.name;


//   // we need a new p element with description text
//   const descriptionElement = document.createElement('p');
//   articleElem.appendChild(descriptionElement);
//   descriptionElement.textContent = seattle.description;



//   const imgElem = document.createElement('img');
//   articleElem.appendChild(imgElem);
//   imgElem.src = 'images/frankie.jpeg'
// }

// createKitty();
// createCity();


// Circleback notes
const storeContainerElem = document.getElementById('store-container')

createCookieStand(seattle);
createCookieStand(tokyo);
createCookieStand(dubai);
createCookieStand(paris);
createCookieStand(lima);


// per cookie stand code
function createCookieStand(cookieStand) {

const sectionElem = document.createElement('section');
storeContainerElem.appendChild(sectionElem);

const locationElem = document.createElement('h2');
sectionElem.appendChild(locationElem);
locationElem.textContent = cookieStand.location;

const hourListElem = document.createElement('ul');
sectionElem.appendChild(hourListElem);

for(let i = 0; i < timeSlots.length; i +=1) {
    const hourItemElem = document.createElement('li');
    hourListElem.appendChild(hourItemElem);
    // hourItemElem.textContent = timeSlots[i];
    const currentTimeSlot = timeSlots[i];
    const currentSales = cookieStand.hourlySales[i]; 

    hourItemElem.textContent = currentTimeSlot + ': ' + currentSales + ' cookies';
}

let total = 0
for(let i = 0; i < cookieStand.hourlySales.length; i +=1) {
    const currentSales = cookieStand.hourlySales[i];
    total += currentSales;
}

const totalItemElem = document.createElement('li');
hourListElem.appendChild(totalItemElem);
totalItemElem.textContent = 'Total: ' + total + 'cookies';
}