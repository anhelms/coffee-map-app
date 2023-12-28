import React from 'react'; //eslint-disable-line
import { Map, Marker } from 'pigeon-maps';

const MyMap = ( { coffeeShops }) => {
  console.log('Coffee Shops:', coffeeShops);
  if (!coffeeShops) {
    return null;
  }

  return (
    <Map center={[34.0549, -118.2426]} zoom={12} width={600} height={400}>
      {coffeeShops.map(coffeeShop => (
        <Marker key={coffeeShop.id} anchor={[parseFloat(coffeeShop.latitude), parseFloat(coffeeShop.longitude)]}  color='red' width={75}>
          {/* <div
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: 'red',
              borderRadius: '50%',
            }}
          /> */}
        </Marker>
      ))}
    </Map>
  );
};

export default MyMap;