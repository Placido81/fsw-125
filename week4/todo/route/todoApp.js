
const express = require('express')
const todoApp = express.Router();
const uuid = require('uuid').v4;
uuid();




const list = [
    
    {
        name: "Water",
        description : "A Person holding a Milk Carton under water",
        imgUrl: "https://images.unsplash.com/photo-1564419429381-98dbcf916478?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MXwxfHNlYXJjaHwyOHx8d2F0ZXJ8ZW58MHx8fHwxNjIwNTEzOTAz&ixlib=rb-1.2.1&q=80&w=1080",
        completed: false,
        _id: uuidv4()
        
    },
    {
        name: "Trees",
        description : "Picture of trees",
        imgUrl: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTgwOTN8MHwxfHNlYXJjaHwxfHx0cmVlc3xlbnwwfHx8fDE2MjA1MTM3ODQ&ixlib=rb-1.2.1&q=80&w=1080",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Bar Hopping",
        description : "Remi Martin, Dirty Martinin, Jameson, Heinekin, Car Bombs, Long Island Ice Tea",
        completed: true,
        _id: uuidv4()
    },
    {
        name: "Polar Bear",
        description : "Polar Bear walking on ice Hunting",
        imgUrl: "https://images.unsplash.com/photo-1614720216135-c83575f58165?ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        completed: true,
        _id: uuidv4()
    },
]


//Get All Items
todoApp.route("/")
    .get((req, res) => {
    res.send(list)
    console.error(id)
    })

//Post Item/s
    .post((req, res) => {
    const newTodo = req.body
    newTodo = uuidv4()
    list.push(newTodo)
    res.send(`Successfully added ${newTodo.name} to list!`)
});

//Get One Item
todoApp.get("/todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo = uuidv4()
    const findToDo = list.find(todo => todo._id === todoId)
    res.send(findToDo)

    console.debug(uuidv4);
})

//Delete Item
todoApp.delete("/todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo = uuidv4()
    const todoIndex = list.findIndex(todo => todo._id === todoId)
    list.splice(todoIndex, 1)
    res.send(`List item was deleted!`)
})

//Update Item - Put
todoApp.put("/todoId", (req, res) => {
    const todoId = req.params.todoId
    const todo = req.body
    todo = uuidv4()
    const todoIndex = list.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(list[todoIndex], req.body) 
    res.send(updatedTodo)
})


module.exports = todoApp;