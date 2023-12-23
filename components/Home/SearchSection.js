import React, { useContext, useEffect, useState } from 'react'
import InputAOID from './InputAOID'
import DroneListOptions from './DroneListOptions';
import { sourcecontext } from '../../context/sourcecontext';
import { destinationcontext } from '../../context/destinationcontext';

function SearchSection() {
  const {source,setSource} =useContext(sourcecontext);
  const {destination,setDestionation} = useContext(destinationcontext);

  const [distance, setDistance] = useState();

  const calcDistance=()=>{
    const dIstance = Math.acos(Math.sin(source.lat)*Math.sin(destination.lat)+Math.cos(source.lat)*Math.cos(destination.lat)*Math.cos(destination.lng-source.lng))*6371*0.000621374 ;
    setDistance(dIstance);
  };
//  useEffect(()=>{
//    if(source){
//      console.log(source);
//    }
//    if(destination){
//      console.log(destination);
//    }
//  },[source,destination])
  return (
    <div>
      <div className='p-5 md:p-4 border-[2px] rounded-xl'>
          <p className='text-[15px] font-semibold'>Get Your Package Delivered</p>
          <InputAOID type='Start'/>
          <InputAOID type='End'/>
          <button  onClick={calcDistance} className='p-3 bg-white w-full mt-5 text-black rounded-lg'>
              Search
          </button>
      </div>
      {distance?<div>
        {distance<1.25?<DroneListOptions distance={distance}/>:<h1>Choose a closer location for options</h1>}
      </div>:null}
    </div>
  )
}

export default SearchSection