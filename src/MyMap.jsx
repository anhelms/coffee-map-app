import React, { useState, useEffect } from 'react'; //eslint-disable-line
import { Map, Marker } from 'pigeon-maps';
import { Modal } from "./Modal";

const MyMap = ( { coffeeShops }) => {
  console.log('Coffee Shops:', coffeeShops);
  if (!coffeeShops) {
    return null;
  }

  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverContent, setPopoverContent] = useState(undefined);

  useEffect(() => {
    console.log('Inside useEffect - Popover Visible:', popoverVisible);
  }, [popoverVisible]);

  const handleMarkerClick = (coffeeShop) => {
    console.log('Before state update - Popover Visible:', popoverVisible);
    setPopoverVisible(true);
    setPopoverContent(coffeeShop.name);
    console.log('After state update - Popover Visible:', popoverVisible);
  };

  return (
    <div className="map-container">
      <Map center={[34.0549, -118.2426]} zoom={12} width={1000} height={400}>
        {coffeeShops.map(coffeeShop => (
          <Marker key={coffeeShop.id} anchor={[parseFloat(coffeeShop.latitude), parseFloat(coffeeShop.longitude)]}  color='red' onClick={() => handleMarkerClick(coffeeShop)} width={75}>
            <img src="src/images/coffee-ping.png" alt="coffee marker"/>
          </Marker>
        ))}
        <Modal show={popoverVisible} onClose={() => setPopoverVisible(false)}>
          <div>This is a test - I clicked on {popoverContent}</div>
        </Modal>
      </Map>
    </div>
  );
};

export default MyMap;