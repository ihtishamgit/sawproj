import React, { useState,useEffect } from 'react'
import axios from "axios";
import ButtonResuableComp from './ButtonResuableComp'
const ButtonReusableComp = () => {
  const [BtnState, setBtnState] = useState(false)
  const [InputValues, setInputValues] = useState({
    MondayStartTime: "",
    TuesdayStartTime: "",
    WednesdayStartTime: "",
    ThursdayStartTime: "",
    FridayStartTime: "",
    SaturdayStartTime: "",
    SundayStartTime: "",
    MondayEndTime: "",
    TuesdayEndTime: "",
    WednesdayEndTime: "",
    ThursdayEndTime: "",
    FridayEndTime: "",
    SaturdayEndTime: "",
    SundayEndTime: ""
  })
  useEffect(() => {
   alert("please fill up the form!")
  },)
  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
    const MondayStartTime = InputValues.MondayStartTime.split(":");
    const MondayEndTime = InputValues.MondayEndTime.split(":");
    const TuesdayStartTime = InputValues.TuesdayStartTime.split(":");
    const TuesdayEndTime = InputValues.TuesdayEndTime.split(":");
    const WednesdayStartTime = InputValues.WednesdayStartTime.split(":");
    const WednesdayEndTime = InputValues.WednesdayEndTime.split(":");
    const ThursdayStartTime = InputValues.ThursdayStartTime.split(":");
    const ThursdayEndTime = InputValues.ThursdayEndTime.split(":");
    const FridayStartTime = InputValues.FridayStartTime.split(":");
    const FridayEndTime = InputValues.FridayEndTime.split(":");
    const SaturdayStartTime = InputValues.SaturdayStartTime.split(":");
    const SaturdayEndTime = InputValues.SaturdayEndTime.split(":");
    const SundayStartTime = InputValues.SundayStartTime.split(":");
    const SundayEndTime = InputValues.SundayEndTime.split(":");
    if (MondayStartTime[0] < MondayEndTime[0] && TuesdayStartTime[0] < TuesdayEndTime[0] && WednesdayStartTime[0] < WednesdayEndTime[0]
      && ThursdayStartTime[0] < ThursdayEndTime[0] && FridayStartTime[0] < FridayEndTime[0] && SaturdayStartTime[0] < SaturdayEndTime[0]
      && SundayStartTime[0] < SundayEndTime[0]
    ) {
      setBtnState(true);
    }
   
  }

  const onClick = () => {
    
    axios.post('/user', {
      InputValues: InputValues
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <>
      <div className="flex space-x-2">
        <div className="flex flex-col space-y-3">
          <ButtonResuableComp />
        </div>

        <div className="flex flex-col w-auto">
          <input type="time"
            onChange={onChange}
            value={InputValues.MondayStartTime}
            name="MondayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.TuesdayStartTime}
            name="TuesdayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.WednesdayStartTime}
            name="WednesdayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.ThursdayStartTime}
            name="ThursdayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.FridayStartTime}
            name="FridayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.SaturdayStartTime}
            name="SaturdayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />
          <input type="time"
            onChange={onChange}
            value={InputValues.SundayStartTime}
            name="SundayStartTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" placeholder="Jane" />

        </div>


        <div className="flex flex-col w-auto">
          <input type="time"
            onChange={onChange}
            name="MondayEndTime"
            value={InputValues.MondayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            name="TuesdayEndTime"
            value={InputValues.TuesdayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            value={InputValues.WednesdayEndTime}
            name="WednesdayEndTime"
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            name="ThursdayEndTime"
            value={InputValues.ThursdayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            name="FridayEndTime"
            value={InputValues.FridayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            name="SaturdayEndTime"
            value={InputValues.SaturdayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
          <input type="time"
            onChange={onChange}
            name="SundayEndTime"
            value={InputValues.SundayEndTime}
            class="appearance-none block bg-gray-200 
          text-gray-700 border border-red-500 rounded 
          py-2 h-12 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name" />
        </div>

      </div>
      <div className="flex justify-end space-x-1">
        {
          BtnState? (  
          <a onClick={onClick} class="bg-green-600 text-black text-xs font-bold py-2 px-8 border rounded">
          Next
        </a>):null        
        }

        <a onClick={onClick} class="bg-red-600 text-black text-xs font-bold py-2 px-8 border rounded">
          Submit
        </a>
      </div>
    </>
  )
}

export default ButtonReusableComp
