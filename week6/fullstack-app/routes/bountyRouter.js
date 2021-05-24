const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
// Fake Data:
const bounties = [
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


bountyRouter
.get('/',(req, res) => {
    res.send(bounties)
    })
.get('/:bountyId', (req, res) => {
    const bountyID = params.bountyId;
    const singularBounty = bounties.find(bounty => bounty._id === bountyId);
    res.send(singularBounty)
})
.get('search/_id', (req, res) => {
    const bountyId = req.query._id;
    const filterBounty = bounties.filter(bounty => bounty.id === bountyId);
})

.post('/', (req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(newBounty)
});

//Delete
bountyRouter.delete('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    bounties.splice(bountyIndex, 1);
    res.send('Bounty was deleted!');
})

//Update - Put
.put('/:bountyId', (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId);
    Object.assign(bounties[bountyIndex], req.body);
    res.send('Resource Updated')
})

module.exports = bountyRouter;