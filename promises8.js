//One benefit of promises is that you can chain them together. This makes them much, much easier to use than callbacks. 

let promise1 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
	 	resolve("dude, ");
	}, 1000)
});

let promise2 = new Promise((resolve, reject)=>{
	setTimeout(()=>{
		resolve("wheres my car");
	}, 300)
});

let getDude = promise1;
let getMyCar = promise2;

var allPromises = [getDude, getMyCar];

Promise.all([promise1, promise2]).then((values)=>{
	console.log(values[0] + values[1]);
});


//run the code to see the output. Then, inside the "all" handler, concatenate the two strings to console log "dude, where's my car"
//Finally, add a nother promise below promise 3, that resolves to the string  "dude, where's my car is a terrible movie"


