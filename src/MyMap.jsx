import React from 'react' //eslint-disable-line
import { Map } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler(import.meta.env.VITE_MY_API_KEY ,'streets')

export function MyMap() {
    return (
        <Map
            provider={maptilerProvider}
            dprs={[1, 2]}
            height={350}
            defaultCenter={[34.0549, -118.2426]}
            defaultZoom={11}
        />
    )
    }