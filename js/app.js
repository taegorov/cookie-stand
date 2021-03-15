let seattle = {
    name: 'Seattle',
    minCustomers: '23',
    maxCustomers: '65',
    avgCookieSale: '6.3',
    hourlyCustomers: Math.floor(Math.random() * Math.floor(max)),
    cookiesPurchased: '', //per hour
}

// const seattleProfileElem = document.createElement('seattleProfile');
// // const seattleProfileElem = document.getElementById('seattleProfile');

// seattleProfileElem.textContent = 'whatever we want';




// Stores the min/max hourly customers, and the average cookies per customer, in object properties

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated

// Store the results for each location in a separate array… perhaps as a property of the object representing that location

// Display the values of each array as unordered lists in the browser

// Calculating the sum of these hourly totals; your output for each location should look like this: