import React from 'react'; //eslint-disable-line
import { Map, Marker } from 'pigeon-maps';

const MyMap = ( { coffeeShops }) => {
  console.log('Coffee Shops:', coffeeShops);
  if (!coffeeShops) {
    return null;
  }

  return (
    <div className="map-container">
      <Map center={[34.0549, -118.2426]} zoom={12} width={1000} height={400}>
        {coffeeShops.map(coffeeShop => (
          <Marker key={coffeeShop.id} anchor={[parseFloat(coffeeShop.latitude), parseFloat(coffeeShop.longitude)]}  color='red' width={75}>
            <img src="src/images/coffee-ping.png" alt="coffee marker"/>
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default MyMap;