

const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

bountyRouter.use(express.json())
// Fake Data:
const bountyRoute = [
    {
        firstName: "Lame ",
        lastName: "Wayane",
        living: true,
        bountyAmount: 11500,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Roy",
        lastName: "Rogers",
        living: false,
        bountyAmount: 13450,
        type: "Sith",
        _id: uuidv4()
    },
    {
        firstName: "Jimmy",
        lastName: "Hendricks",
        living: false,
        bountyAmount: 72300,
        type: "Jedi",
        _id: uuidv4()
    },
    {
        firstName: "Jenna",
        lastName: "Jamienson",
        living: true,
        bountyAmount: 69999,
        type: "Sith",
        _id: uuidv4()
    }
];

// Calling Data to server:


bountyRouter.route("/")
    .get((req, res) => {
        res.send(bountyRoute)
    })

    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bountyRoute.push(newBounty)
        res.send(`Successfully added ${newBounty.first_name}  ${newBounty.last_name} to database!`)
    })


module.exports = bountyRouter