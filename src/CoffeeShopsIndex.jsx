import React from 'react'; //eslint-disable-line
import './CoffeeShopsIndex.css';


export function CoffeeShopsIndex(props) {
    return (
        <div className="coffee-shops-container">
            {props.coffeeShops.map((coffeeShop) => (
                <div key={coffeeShop.id} className="coffee-shop-card">
                    <h3>{coffeeShop.name}</h3>
                    <img src={coffeeShop.image_url} alt={coffeeShop.name} />
                    <p>Latitude: {coffeeShop.latitude}</p>
                    <p>Longitude: {coffeeShop.longitude}</p>
                    <button className="more" onClick={() => props.onShowCoffeeShop(coffeeShop)}>More info</button>
                </div>
            ))}
        </div>
    );
}