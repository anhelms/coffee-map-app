export function CoffeeShopsShow(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdateCoffeeShop(props.coffee_shop.id, params, () => event.target.reset());
    };

    const handleClick = () => {
        props.onDestroyCoffeeShop(props.coffee_shop);
    };

    return (
        <div>
            <h1>Coffee Shop information</h1>
            <p> Name: {props.coffee_shop.name}</p>
            <p>Latitude: {props.coffee_shop.latitude}</p>
            <p>Longitude: {props.coffee_shop.longitude}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input defaultValue={props.coffee_shop.name} name="name" type="text" />
                </div>
                <div>
                    Latitude: <input defaultValue={props.coffee_shop.latitude} name="latitude" type="text" />
                </div>
                <div>
                    Longitude: <input defaultValue={props.coffee_shop.longitude} name="longitude" type="text" />
                </div>
                <button type="submit">Update Coffee Shop</button>
            </form>
            <button onClick={handleClick}>Destroy coffee shop</button>
        </div>
    );
}