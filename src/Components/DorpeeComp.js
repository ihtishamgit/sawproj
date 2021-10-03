import React from 'react'
import DorpeeNavbar from './DorpeeNavbar'
import VenueDetailsComp from './VenueDetailsComp'
const DorpeeComp = () => {
    return (
        <>
       
          <div className="border container w-auto mx-auto bg-blue-400 rounded-sm">
          <DorpeeNavbar/>
        <VenueDetailsComp/>
          </div>  
        </>
    )
}

export default DorpeeComp
