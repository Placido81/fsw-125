import React, { useState, useEffect } from 'react'

import './App.css'
import axios from 'axios'
import DropDown from './dropdownmenu/DropDown.js.js'
import Bounties from './components/Bounties.js'
import AddBountyForm from './components/AddBountyForm.js'








 
 function App() {
  
    
    
    const [bounties, setBounties] = useState([])

    const getBounties = (() => {
        axios.get("/bounties")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    })

    const addBounty = ((newBounty) => {
        axios.post("/bounties", newBounty)
            .then(res => {
                setBounties(prevBounties => [...prevBounties, res.data]);
            })
            .catch(err => console.log(err))
    })

    const deleteBounty = ((bountyId) => {
        axios.delete(`/bounties/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
})
    
    const editBounty = ((updates, bountyId) => {
        axios.put(`/bounties/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map (bounty => bounty._id !== bountyId ? bounty : res.data))
            })
            .catch(err => console.log(err))
    })
  
    

    useEffect(() => {
        getBounties()
     }, [])

     
       return(
      

        <div>
              
       
      

            <h1 className="title">Bounty Hunter's Database</h1>
        <AddBountyForm 
            submit={addBounty}
            btnText="Add Bounty"/>
        
        { 
          bounties.map(bounties => 
            {
                return( <Bounties 
            {...bounties} 
            key={bounties._id}
            firstName={bounties.firstName}
            lastName={bounties.lastName}
            living={bounties.living}
            bountyAmount={bounties.bountyAmount}
            type={bounties.type}
            deleteBounty={deleteBounty}
            editBounty={editBounty}
            />
            )}
          )}
        </div>
       )};
       
      



      export default App    