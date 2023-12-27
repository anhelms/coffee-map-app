export function CoffeeShopsIndex(props) {
    return (
        <div>
            <h1>All coffee shops</h1>
            {props.coffee_shops.map((coffee_shop) => (
                <div key={coffee_shop.id}>
                    <h2>{coffee_shop.name}</h2>
                    <p>Latitude: {coffee_shop.latitude}</p>
                    <p>Longitude: -{coffee_shop.longitude}</p>
                    <button onClick={() => props.onShowCoffeeShop(coffee_shop)}>More info</button>
                </div>
            ))}
        </div>
    );
}