export function CoffeeShopsIndex(props) {
    return (
        <div>
            <h2>All coffee shops</h2>
            {props.coffeeShops.map((coffeeShop) => (
                <div key={coffeeShop.id}>
                    <h3>{coffeeShop.name}</h3>
                    <p>Latitude: {coffeeShop.latitude}</p>
                    <p>Longitude: {coffeeShop.longitude}</p>
                    <button onClick={() => props.onShowCoffeeShop(coffeeShop)}>More info</button>
                </div>
            ))}
        </div>
    );
}