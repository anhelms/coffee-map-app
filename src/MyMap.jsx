import React, { useState, useEffect } from 'react'; //eslint-disable-line
import { Map, Marker } from 'pigeon-maps';
import { Modal } from "./Modal";
import { CoffeeShopsShow } from './CoffeeShopShow';

const MyMap = ( { coffeeShops }) => {
  console.log('Coffee Shops:', coffeeShops);
  const [coffeeShopToShow, setCoffeeShopToShow] = useState(null);

  const handleMarkerClick = (coffeeShop) => {
     console.log('Clicked coffeeShop:', coffeeShop);
    setCoffeeShopToShow(coffeeShop);
  };

  const handleCloseModal = () => {
    setCoffeeShopToShow(null);
  };

  if (!coffeeShops) {
    return null;
  }

  return (
    <div className="map-container">
      <Map center={[34.0549, -118.2426]} zoom={12} width={1000} height={400}>
        {coffeeShops.map(coffeeShop => (
          <Marker
            key={coffeeShop.id} 
            anchor={[parseFloat(coffeeShop.latitude), parseFloat(coffeeShop.longitude)]} 
            color='red' 
            width={75}
            onClick={() => {
              console.log('Marker clicked:', coffeeShop);
              handleMarkerClick(coffeeShop);
            }}
            >
            {/* <img src="src/images/coffee-ping.png" alt="coffee marker"/> */}
          </Marker>
        ))}
      </Map>
      {coffeeShopToShow && (
        <Modal show={true} onClose={handleCloseModal}>
            {/* <p>Name: {coffeeShopToShow.name}</p>
            <p>Latitude: {coffeeShopToShow.latitude}</p>
            <p>Longitude: {coffeeShopToShow.longitude}</p> */}
            <CoffeeShopsShow coffeeShop={coffeeShopToShow} />
        </Modal>
      )}
    </div>
  );
};

export default MyMap;