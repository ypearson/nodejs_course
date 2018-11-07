var asyncAdd = (a,b) =>
{
    return new Promise((resolve,reject) => {
        setTimeout(() =>
        {
            if(typeof a === 'number' && typeof b === 'number')
            {
                resolve(a+b);
            }
            else
            {
                reject("not a number");
            }
        },1500);

    });
};

// asyncAdd(5,'10').
//     then((res) =>
//     {
//         console.log(res);
//         return asyncAdd(res,33);
//     }, (errorMsg) =>
//     {
//         console.log(errorMsg);
//         return asyncAdd(errorMsg,33);
//     }).then((res) =>
//     {
//         console.log(res);
//     },
//     (errorMsg) =>
//     {
//         console.log(errorMsg);
//     });

asyncAdd(5,10)
    .then(res =>
    {
        console.log(res);
        return asyncAdd(res,33);
    })
    .then(res =>
    {
        console.log(res);
    })
    .catch(errorMsg =>
    {
        console.log(errorMsg);
    });


// var somePromise = new Promise((resolve, reject) =>
// {
//     setTimeout(()=>
//     {
//         // resolve("hey it worked!");
//         reject("Unable to fulfill promise");
//     },2000);

// });

// somePromise.then((msg) =>
// {
//     console.log(`Message: ${msg}`);
// }, (errorMsg) =>
// {
//     console.log(`Message: ${errorMsg}`);
// });