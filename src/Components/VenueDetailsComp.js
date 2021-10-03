import React from 'react'
import Buttoncomp from './Buttonscomp'
const VenueDetailsComp = () => {
  
    return (
        <>
        <div className="px-12"> 
          <div className="container flex flex-col bg-white mx-auto my-4 py-2 px-2 rounded-lg border">
        
          <span className="text-left text-md font-bold">List Your Venue</span>
          <span className="text-blue-300 text-md font-semibold text-left">2.Venue Opening Times</span>
    
         
          <div class="w-full flex justify-end text-xs"> 
          <p className="w-2/5 bg-gray-100 rounded-xl p-2"> <span className="font-bold">Hint</span> lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </div>
          <span className="text-xs text-left py-2"> Click on the toggle to open/close</span>
          <Buttoncomp/>
         
           </div>
         </div>
        </>
    )
}

export default VenueDetailsComp
