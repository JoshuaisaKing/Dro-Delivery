"use client"
import { destinationcontext } from '@/context/destinationcontext';
import { sourcecontext } from '@/context/sourcecontext';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'

function InputAOID({type}) {
  const [value, setValue] = useState(null);
  const [placeholder, setPlaceholder] = useState(null);
  const {source,setSource} =useContext(sourcecontext);
  const {destination,setDestination} = useContext(destinationcontext);

  useEffect(()=>{
    type=='source'
    ?setPlaceholder('PickUp Location')
    :setPlaceholder('Dropoff Location')
  })

  const getLatandLong=(place,type)=>{
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId},(place,status)=>{
      if(status==='OK'&& place.geometry && place.geometry.location){
        console.log(place.geometry.location.lat());
        console.log(place.geometry.location.lng());
        if(type=='Start'){
          setSource({
            lat:place.geometry.location.lat(),
            lng:place.geometry.location.lng(),
            name:place.formatted_address,
            label:place.name
          })
        }else{
          setDestination({
            lat:place.geometry.location.lat(),
            lng:place.geometry.location.lng(),
            name:place.formatted_address,
            label:place.name
          })
        }
      }
    })
  }

  return (
    <div className='bg-slate-200 p-3 rounded-lg mt-3 flex items-center gap-5'>
        <Image src={type=='Start'?'/Pickupico.png':'/Delico.jpg'} width={20} height={20}/>
        {/*<input type='text' placeholder={type=='Start'?'Pickup Location':'Drop Location'} className='w-full bg-transparent outline-none text-black'/>*/}
        <GooglePlacesAutocomplete
        selectProps={{
          styles: {
            control: (provided) => ({
              ...provided,
              backgroundColor:'#00ffff00',
              border:'none'
            }),
            option: (provided) => ({
              ...provided,
              color: 'black',
            }),
            singleValue: (provided) => ({
              ...provided,
              color: 'black',
            }),
          },
          value,
          onChange: (place)=>{getLatandLong(place,type);
            setValue(place)},
          placeholder: type == 'Start'?'Pickup Location':'Drop Location',
          isClearable:true,
          className:'w-full',
          components:{
            DropdownIndicator:false
          }
        }}
        />
    </div>
  )
}

export default InputAOID