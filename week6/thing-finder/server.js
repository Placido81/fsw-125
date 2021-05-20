const express = require('express'); // Importing Express
const app = express(); // Declaring Server Variable
const morgan = require('morgan'); // Importing Morganrs
// ------------------------------------------- Installing Express-Query-Boolean
const PORT = 7000
// Middleware (for every request) // Looks For A Request Body, And Turns It Into 'req.body'
    app.use(express.json());
    app.use(morgan('dev')); // Logs Request To The Console
// ---------------------------------------------------------------- Setting More Middle Ware
// ---------------------------------------------------------------- Server Imports
app.use('/storeRouter', require('./routes/storeRouter.js'));

// ------------------- Error Handling
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message});
});

// ------------------------------------------------------------------- Server Is Set To Listen
//  -------------------Two Arguments: PORT, CB
app.listen(PORT, () => {
    console.log(`Server running on Port: ${PORT}`);
})