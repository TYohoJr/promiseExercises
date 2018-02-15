
var axios = require('axios');
axios.get('https://pokeapi.co/api/v2/pokemon/').then((response)=>{
    for(var something in response){
        if(response[something].name){
        console.log(response[something].name)
        }
    }
})