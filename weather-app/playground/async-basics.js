console.log('starting app');

setTimeout(()=>{
    console.log("inside in callback")
},2000);

setTimeout(()=>{
    console.log("2nd callback")
},0);

console.log('finishing app');