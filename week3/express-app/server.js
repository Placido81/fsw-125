const express = require("express")
const app = express()

// Server Routes:
         app.use(express.json())
         app.use("/bountyRoute", require("./routes/bountyRouter.js"))
            app.get('/', function(req, res, next){
              next();
})
app.listen(3000, () => {
    console.log("This is a working server!")
})
