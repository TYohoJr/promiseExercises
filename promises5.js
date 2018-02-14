//one thing you'll see often is objects, strings, numbers, or whatever getting passed through the promises' resolve and reject function. 


let promise = new Promise((resolve, reject)=>{
	reject();
	resolve({
		message: "Your promise has been resolved",
		code:200
	});
});

promise.then((obj) =>{
	console.log(obj.message);
}, ()=>{
	console.log(Error("your promise got rejected, or something like that"))
});


//modify the code above to throw a rejection, and change the message to be "your promise got rejected, or something like that"
