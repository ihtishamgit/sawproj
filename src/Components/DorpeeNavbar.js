import React from 'react'
import img from '../images/256x256bb (1).jpg'
const DorpeeNavbar = () => {
    return (
        <>
         <nav className="container bg-white mx-auto px-8 py-4 flex justify-between">
             <div className="flex"> 
          <img src={img} className="w-8 h-8"/> 
          <strong className="text-2xl">Dorpee</strong>   
          </div>
          <div className="flex space-x-2">
          <span>Find a workspace</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>    
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
</svg>
          </div>  
       </nav>   
        </>
    )
}

export default DorpeeNavbar
