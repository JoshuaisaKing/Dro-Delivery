import React from 'react';
import Image from "next/image";
import { HiMiniArchiveBoxArrowDown } from "react-icons/hi2";

function Drones({drone, distance}) {
  return (
    <div>
        <div className='flex items-center justify-between p-5'>
          <div className='flex items-center gap-8'>
                <Image src={drone.image} width={100} height={50} alt='lol'/>
                <div>
                  <h3 className='font-semibold text-[18px] flex gap-3 items-center'>{drone.name}
                  <span className='gap-2 flex items-center font-extralight text-[16px]'>
                    <HiMiniArchiveBoxArrowDown /> {drone.maxWeight}
                  </span>
                  </h3>
                  <p>{drone.description}</p>
                </div>
          </div>
          <h3 className='text-[19px] font-medium'>₹{(drone.amount*distance['distance']).toFixed(2)}</h3>
        </div>
    </div>
  )
}

export default Drones