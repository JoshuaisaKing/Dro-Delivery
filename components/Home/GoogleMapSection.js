"use client"
import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, MarkerF, OverlayView, useJsApiLoader , PolylineF ,CircleF} from '@react-google-maps/api';
import { sourcecontext } from '../../context/sourcecontext';
import { destinationcontext } from '../../context/destinationcontext';

function GoogleMapSection() {
  const {source,setSource} = useContext(sourcecontext);
  const {destination,setDestination} = useContext(destinationcontext);
  const containerStyle = {
    width: '100%',
    height: window.innerWidth*0.425
  };
  
  const [center,setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });

  const [center_dest,setCenterDest] = useState(); 

  useEffect(()=>{
    if(source!=[]&&map){
      map.panTo(
        {
          lat:source.lat,
          lng:source.lng
        }
      )
      setCenter({
        lat:source.lat,
        lng:source.lng
      })
      setCenterDest({
        lat:destination.lat,
        lng:destination.lng
      })
    }
  },[source,destination])

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const flightCoordinates = [
    { lat: source.lat, lng: source.lng },
    { lat: destination.lat, lng: destination.lng },
  ];

  console.log(center,'                         lmao                                ',center_dest);
  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId:'1b1176a310fdd650'}}
      >
        {source.length!=[]?<MarkerF
        position={{lat:source.lat,lng:source.lng}}
        icon={{
          url:"/pin.png",
          scaledSize:{
            width:20,
            height:20
          }
        }}
        >
          <OverlayView
            position={{lat:source.lat,lng:source.lng}}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
              <div>
                <p>
                  {source.label}
                </p>
              </div>
          </OverlayView>
        </MarkerF>:null}
        
        {destination.length!=[]?<MarkerF
        position={{lat:destination.lat,lng:destination.lng}}
        icon={{
          url:"/pin (1).png",
          scaledSize:{
            width:20,
            height:20
          }
        }}
        >
          <OverlayView
            position={{lat:destination.lat,lng:destination.lng}}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
              <div>
                <p>
                  {destination.label}
                </p>
              </div>
          </OverlayView>
        </MarkerF>:null}

        {destination.length!=[]&&source.length!=[]?
        <PolylineF
          path={flightCoordinates}
          geodesic={true}
                options={{
                    fillColor: "red",
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.65,
                    strokeWeight: 1,
                }}
        />:null}
        {destination?
        <CircleF
          center={center_dest}
          radius={10}
        />
      :null}
      </GoogleMap>
  )
}

export default GoogleMapSection;