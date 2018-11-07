var somePromise = new Promise((resolve, reject) =>
{
    resolve("hey it worked!");
});

somePromise.then((user) => {
    console.log(message);
})