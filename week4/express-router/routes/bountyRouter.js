const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
// Fake Data:
const bounty = [
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
        res.send(bounty)
    })
    .get('/:bountyId',(req,res) => {
        const bountyId = req.params.bountyId;
        const singularBounty = bounty.filter(bounties => bounties._id === bountyId);
        res.send(singularBounty)
    })
    .get('search/_id', (req, res) => {
        const bountyId = req.query._id;
        const filteredBounty = bounty.filter(bounties => bounties._id === bountyId);
        res.send(filteredBounty)
    })
    
    .post('/', (req,res) =>{
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounty.push(newBounty)
        res.send(`Successfully added ${newBounty.firstName} ${newBounty.lastName} to the database`);
    })


    .delete('/:bountyId', (req, res)=>{
        const bountyId = req.params.bountyId;
        const bountyIndex = bounty.findIndex(bounties => bounties._id === bountyId);
        bounty.splice(bountyIndex, 1);

        res.send ('Resource was successfully deleted!')
    })

    .put('/:bountyId', (req, res) => {
        const bountyId = req.params.bountyId;
        const bountyIndex = bounty.findIndex(bounties => bounties._id ===bountyId);
        Object.assign(bounty[bountyIndex], req.body);
        res.send('Resource Updated!');
    })

module.exports = bountyRouter;