const fetch = require('node-fetch'); 

// 1) 

// asynchronous function that calls the api 
async function getUserCards(){
    const allUsers = [];

    // loops from 0 to 24 in order to get back 25 user cards
    for (let i = 0; i < 25; i++){
        const url = 'http://faker.hook.io/?property=helpers.userCard';
        const response = await fetch(url); // making the request to url
        const userCard = await response.json(); // turns the data returned from request to a json object
        allUsers.push(userCard); // adds the data to aarray
    }
    
    console.log(allUsers); // logs result to console
  }

  getUserCards();