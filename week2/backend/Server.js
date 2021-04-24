

const express = require('express')
const app = express()

const Port = 4000

const data = [
   { 
    name: "Harwood Stout",
    gender: "Male",
    culture: "Northmen",
   },
   {
 name: "Damon Lannister",
 gender: "Male",
 culture: "Westerman",
 died: "In 210 AC",
},
{
 name: "Daeron I",
 gender: "Male",
 born: "143 AC, at King's Landing",
 died: "161 AC, at Dorne"
}]
app.get("/characters", (req, res) => {
    
    res.send(
        data

    )

})

const data2 = [
    {
        "name": "Psypunch",
        "cost": [
            "Psychic",
            "Colorless"
        ],
        "convertedEnergyCost": 2,
        "damage": "30",
        "text": ""
    }
 ]
 app.get("/attacks2", (req, res) => {
     
     res.send(
         data2
 
     )
 
 })

 const data3 = [
    {
        "name": "Mind Shock",
        "cost": [
            "Psychic",
            "Colorless",
            "Colorless",
            "Colorless"
        ],
        "convertedEnergyCost": 4,
        "damage": "60",
        "text": "This attack's damage isn't affected by Weakness or Resistance."
    }
 ]
 app.get("/attacks3", (req, res) => {
     
     res.send(
         data3
 
     )
 
 })

// app.post('/characters',(req, res) =>{
//     res.send('POST request to the homepage')
// })    
app.listen(Port, () => {
    console.log(`App started on port: ${Port}!`)
})


     


