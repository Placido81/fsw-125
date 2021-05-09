
const express = require('express');
const app = express();
const morgan = require('morgan')
const fs = require('fs')
;(async () => {
  
})()


app.use(express.json());
app.use(morgan('dev'))

app.use("/todo", require("./route/todoApp.js"));

app.listen(3000, () => {
    console.log("Server running on Port 3000.")
});