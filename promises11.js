
// var axios = require('axios');

// let test1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((response)=>{
//     new Promise((resolve, reject)=>{
//         return response.data.name
// });

// let test2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/').then((response)=>{
//     new Promise((resolve, reject)=>{
//         return response.data.name
// });

// let test3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/').then((response)=>{
//     new Promise((resolve, reject)=>{
//         return response.data.name
// });

// let allPokemon = [test1, test2, test3];

//alternative answer

//Chain a few promises together using axios and pokemon api to console log 
//"here's three pokemon from the api: {name1}, {name2}, {name3}
var axios = require('axios');

var p1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/');
var p2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/');
var p3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/');

var allPokemon = [p1, p2, p3];

Promise.all(allPokemon).then((values)=>{
    var name1 = values[0].data.name;
    var name2 = values[1].data.name;
    var name3 = values[2].data.name;
    console.log(`${name1}, ${name2}, ${name3}`);
});
