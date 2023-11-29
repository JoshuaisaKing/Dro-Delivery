import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    const HeaderMenu = [
        {
            id:1,
            name:'Package Delivery',
            icon:'/del_normal.jpg'
        },
        {
            id:2,
            name:'Food Delivery',
            icon:'/del_food.jpg'
        },
        {
            id:3,
            name:'Medicinal Delivery (Requires Prescription)',
            icon:'/del_medicine.jpg'
        }
    ]
  return (
    <div className='p-2 pb-2 pl-15 border-b-[1px] border-gray-700 flex items-center justify-between'>
        <div className='flex gap-24 items-center'>
            <Image src='/logo.png' width={200} height={300} alt='Logo'/>

            <div className='flex gap-24 items-center'>
                {HeaderMenu.map((item)=>(
                    <div className='flex gap-4 items-center'>
                        <Image src={item.icon} width={50} height={50} />
                        <h2 className='text-[13px] font-medium'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
        <UserButton/>
    </div>
  )
}

export default Header