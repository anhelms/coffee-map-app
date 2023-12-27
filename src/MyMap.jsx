import React, { useState } from 'react' //eslint-disable-line
import { Map, Marker } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler(import.meta.env.VITE_MY_API_KEY ,'streets')

export function MyMap() {
    const [hue, setHue] = useState(0)
    const color = `hsl(${hue % 360}deg 39% 70%)`
    return (
        <Map provider={maptilerProvider} dprs={[1, 2]} height={350} defaultCenter={[34.0549, -118.2426]}defaultZoom={11}>
            <Marker width={50} anchor={[50.879, 4.6997]} color={color} onClick={() => setHue(hue + 20)}/>
      <Marker 
        width={50}
        anchor={[34.0549, -118.2426]} 
        color={color} 
        onClick={() => setHue(hue + 20)} 
      >
          {/* <CustomIcon /> */}
      </Marker>
      </Map>

    )
    }