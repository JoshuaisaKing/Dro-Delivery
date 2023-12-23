import { droneData } from '../../app/util/droneData';
import React, { useState } from 'react'
import Drones from './Drones'
import { useRouter } from 'next/navigation';

function DroneListOptions(distance) {
  const [activeIndex, setActiveIndex] = useState();
  const [selectedDrone, setSelectedDrone] = useState();
  const router = useRouter();
  return (
    <div className='mt-5'>
      <div className='overflow-auto h-[550px] w-100% pr-[15px]' id='lmao'>
        <h2 className='text-[22px] font-semibold'>Available Drones</h2>
        {droneData.map((item, index)=>(
            <div className={`cursor-pointer p-2 rounded-xl
            ${activeIndex===index?'border-[2px]':null}`}
             onClick={()=>{setActiveIndex(index); setSelectedDrone(item)}}>
                <Drones drone={item} distance={distance}/>
            </div>

        ))}
      </div>
      {selectedDrone?console.log(distance['distance']):null}
      {selectedDrone?<div className='flex p-3 justify-between w-full md:w-[30%] border-[1px] items-center rounded-xl fixed'>
        <h3 className='justify-between'>Make Payment</h3>
        <button className='bg-transparent items-center' onClick={()=>router.push(('/payment?amount=')+(selectedDrone['amount']*distance['distance']).toFixed(2))}>Request {selectedDrone.name}</button>
      </div>:null}
    </div>
  )
}

export default DroneListOptions