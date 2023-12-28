export function CoffeeShopsIndex(props) {
    return (
        <div>
            <h1>All coffee shops</h1>
            {props.coffeeShops.map((coffeeShop) => (
                <div key={coffeeShop.id}>
                    <h2>{coffeeShop.name}</h2>
                    <p>Latitude: {coffeeShop.latitude}</p>
                    <p>Longitude: {coffeeShop.longitude}</p>
                    <button onClick={() => props.onShowCoffeeShop(coffeeShop)}>More info</button>
                </div>
            ))}
        </div>
    );
}