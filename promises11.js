
var axios = require('axios');

let test1 = axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((response)=>{
    new Promise((resolve, reject)=>{
        return response.data.name
});

let test2 = axios.get('https://pokeapi.co/api/v2/pokemon/2/').then((response)=>{
    new Promise((resolve, reject)=>{
        return response.data.name
});

let test3 = axios.get('https://pokeapi.co/api/v2/pokemon/3/').then((response)=>{
    new Promise((resolve, reject)=>{
        return response.data.name
});

let allPokemon = [test1, test2, test3];

Promise.all(allPokemon).then((values)=>{
    console.log(`${values[0]}, ${values[1]}, ${values[2]}`)
})
