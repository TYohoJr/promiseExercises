//In a properly constructed promise, you'll call both resolve() and reject() somewhere inside. 
//Usually, there will be some conditional that resolves the promise, and if its not met, you'll
//reject it. Here's a super simple case:

let promise = new Promise((resolve, reject)=>{
	
	let evaluation = 2+2;
	let guess = 5;

	if (evaluation === guess){
		resolve("resolveddd");
	} else {
		reject("rejecteddd");
	}
});
//p.then(onFulfilled[, onRejected]);
promise.then((obj)=>{
	console.log(obj)
}, (obj2)=>{
	console.log(Error(obj2))
});
//modify the code to pass the string "your guess is correct!" in the resolve and "your guess is wrong dum dum" in the rejection
//then, below write code to run the promise. 
//finally, modify the innards of the promise above to throw the rejection
/*p.then(function(value) {
  // fulfillment
}, function(reason) {
  // rejection
});*/