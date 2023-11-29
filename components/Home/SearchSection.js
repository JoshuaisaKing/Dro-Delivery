import React, { useContext, useEffect } from 'react'
import InputAOID from './InputAOID'
import { sourcecontext } from '@/context/sourcecontext';
import { destinationcontext } from '@/context/destinationcontext';

function SearchSection() {
  const {source,setSource} =useContext(sourcecontext);
  const {destination,setDestionation} = useContext(destinationcontext);

  useEffect(()=>{
    if(source){
      console.log(source);
    }
    if(destination){
      console.log(destination);
    }
  },[source,destination])
  return (
    <div className='p-5 md:p-7 border-[2px] rounded-xl'>
        <p className='text-[15px] font-semibold'>Get Your Package Delivered</p>
        <InputAOID type='Start'/>
        <InputAOID type='End'/>
        <button className='p-3 bg-white w-full mt-5 text-black rounded-lg'>
            Search
        </button>
    </div>
  )
}

export default SearchSection