//one of the best parts of chaining multiple promises together using Promise.all is that error handling only needs to be done once (so much better than callbacks).
//If I reject any of these promises, then my error handler function (the second arg in Promise.all) gets called. Test it out by rejecting promise1, promise2, or
//promise3 and see that you can catch it one place

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

let promise3 = new Promise((resolve, reject)=>{
        reject();
	setTimeout(()=>{
		resolve("is a terrible movie");
	}, 300);
});

<<<<<<< HEAD
var allPromises = [promise1, promise2, promise3];
=======
let dude = promise1;
let myCar = promise2;
let terribleMovie = promise3;

var allPromises = [dude, myCar, terribleMovie];
>>>>>>> 8eb6f3b136df0e8b92ab22c07cd842ebbb17e3b1

Promise.all(allPromises).then((values)=>{
        console.log(values);
}, ()=>{
	console.log(Error("FAIL"))
});
