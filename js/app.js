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


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(hourlySales(23, 65, 6.3));

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

const seattle = {
    location: 'Seattle',
    hourlySales: hourlySales(23, 65, 6.3),
    // [Math.random() * 6.3],
    minCustomers: '23',
    maxCustomers: '65',
    avgCookieSale: '6.3',
    cookiesPurchased: '', //per hour
}


const tokyo = {
    location: 'Tokyo',
    hourlySales: hourlySales(3, 24, 1.2),
    minCustomers: '3',
    maxCustomers: '24',
    avgCookieSale: '1.2',
    cookiesPurchased: '', //per hour
}

const dubai = {
    location: 'Dubai',
    hourlySales: hourlySales(11, 38, 3.7),
    minCustomers: '11',
    maxCustomers: '38',
    avgCookieSale: '3.7',
    cookiesPurchased: '', //per hour
}

const paris = {
    location: 'Paris',
    hourlySales: hourlySales(20, 38, 2.3),
    minCustomers: '20',
    maxCustomers: '38',
    avgCookieSale: '2.3',
    cookiesPurchased: '', //per hour
}

const lima = {
    location: 'Lima',
    hourlySales: hourlySales(2, 16, 4.6),
    minCustomers: '2',
    maxCustomers: '16',
    avgCookieSale: '4.6',
    cookiesPurchased: '', //per hour
}

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
totalItemElem.textContent = 'Total: ' + total + ' cookies';
}