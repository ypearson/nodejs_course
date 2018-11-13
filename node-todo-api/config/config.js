var env = process.env.NODE_ENV || 'development';
if(env === 'development') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://ypearson:GBP4vnYJvfKEw3g@ds111791.mlab.com:11791/hellodb';
} else if (env === 'test') {
    process.env.PORT = 3000
    process.env.MONGODB_URI = 'mongodb://ypearson:GBP4vnYJvfKEw3g@ds111791.mlab.com:11791/hellodb';
    // process.env.MONGODB_URI = 'mongodb://ypearson:GBP4vnYJvfKEw3g@ds111791.mlab.com:11791/hellodbtest';
}
