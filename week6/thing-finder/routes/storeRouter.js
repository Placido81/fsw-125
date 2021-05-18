const express = require("express")
const storeRouter = express.Router()
const {v4: uuidv4} = require("uuid")


const store = [
  {  name: "banana",
      type: "food",
      price: 200,
     _id: uuidv4() 
},
     {name: "pants",
     type: "clothing",
     price: 2500,
     _id: uuidv4() 
},
     {name: "basket ball",
     type: "toy",
     price: 1000,
     _id: uuidv4() 
    },
     {name: "hacky sack",
     type: "toy",
     price: 1500,
     _id: uuidv4() 
    },
     {name: "shirt",
     type: "clothing",
     price: 800,
     _id: uuidv4() 
    },
     {name: "soup",
     type: "food",
     price: 300,
     _id: uuidv4() 
    },
     {name: "flour",
      type: "food",
      price: 100,
      _id: uuidv4()
}
]

storeRouter.route('/')
 // ----------------------- Get All -----------------------
    .get((req,res) => {
        res.status(200).send(store)
    })
     // ------------------------ Post One---------------------
    .post((req, res) => {
        const newItem = req.body
         newItem._id = uuidv4()
            store.push(newItem)
            res.status(201).send(newItem, `New To Do Added Title ${newItem.name} To The List`);
    })
// ------------------------ Get A Single  -------------
storeRouter.route('/:storeId')
    .get((req,res) => {
        const storeId = req.params.storeId
        const foundItem = store.find(store => store._id === storeId)
        res.send(foundItem)
    })
     // --------------------------- Update A All -----------------
   
storeRouter.get('/search/type', (req, res) => {
    const type = req.query.type
    const filteredStore = store.filter(store => store.type === type)
    res.send(filteredStore)
})
// -------------------------- Delete A One ----------------
storeRouter.delete((req, res) => {
    const storeId = req.params.storeId
    const storeIndex = store.findIndex(store => store._id === storeId)
    store.splice(storeIndex, 1)
    res.status(200).send(`To Has Been Deleted`);
})
storeRouter.put((req, res) => {
    const storeId = req.params.storeId
    const updateStore = req.body
    const storeIndex = store.findIndex(store => store._id === storeId)
    const updatedStore = Object.assign(store[storeIndex], updateStore)
    res.status(201).send(updatedStore);
})
 


   // ---------------------------------- Exporting Module ------------- 

module.exports = storeRouter
