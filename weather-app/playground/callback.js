// http://maps.googleapis.com/maps/api/geocode/json
AIzaSyC6IyaFKdebbL2dnqewKPugzXKCkSXGYvY

// https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyC6IyaFKdebbL2dnqewKPugzXKCkSXGYvY&address=30%20norfolk%20st%20cambridge%20ma
// https://www.npmjs.com/package/request

var getUser = (id, callback) => {
    var user = {
        id:id,
        name: 'Vikram'
    };

    setTimeout(()=>{
        callback(user);
    },3000);

};

getUser(31,(userObject)=>{
    console.log(userObject)
});