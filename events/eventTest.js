const EventEmitter = require ("events");
const emitter = new EventEmitter;

const summery = {
    "userinfo" : 0,
    "userlogin" : 0,
    "purchaseDetail" : 0,
    "userlogout" : 0,
}


emitter.on("userinfo", (username)=>{
    summery.userinfo++;
   console.log(`userName = ${username}`);
})

emitter.on("login", (name) => {
    summery.userlogin++;
    console.log(`${name} logIn`); 
})

emitter.on("purcheseDetail", (name, item) => {
    summery.purchaseDetail++;
    console.log(`${name} purchase ${item}`);
    
})

emitter.on("logout", (name) => {
    summery.userlogout++;
    console.log(`${name} logOut`); 
})

emitter.on("summery", (summery) => {
    console.log(summery);
})

emitter.emit("userinfo", "Hamza");
emitter.emit("login", "Hamza");
emitter.emit("purcheseDetail", "Hamza", "Handfree");
emitter.emit("logout", "Hamza");


emitter.emit("summery", summery);


