import React,{useState} from 'react'

const ButtonResuableComp = (props) => {
  const [Id, setId] = useState()


   

   const onClick =(e)=>{
    e.target.style.backgroundColor ="blue"
   }



    return (
        <>
   <a onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Monday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Tuesday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Wednesday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Thursday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Friday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Saturday
      </a>
      <a  onClick={onClick} class="bg-white text-black h-12 text-xs font-bold py-3 px-8 border rounded">
        Sunday
      </a>

        </>
    )
}

export default ButtonResuableComp
