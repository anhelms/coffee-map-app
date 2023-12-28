export function CoffeeShopsShow(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onUpdateCoffeeShop(props.coffeeShop.id, params, () => event.target.reset());
    };

    const handleClick = () => {
        props.onDestroyCoffeeShop(props.coffeeShop);
    };

    return (
        <div>
            <h1>Coffee Shop information</h1>
            <p> Name: {props.coffeeShop.name}</p>
            <p>Latitude: {props.coffeeShop.latitude}</p>
            <p>Longitude: {props.coffeeShop.longitude}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input defaultValue={props.coffeeShop.name} name="name" type="text" />
                </div>
                <div>
                    Latitude: <input defaultValue={props.coffeeShop.latitude} name="latitude" type="text" />
                </div>
                <div>
                    Longitude: <input defaultValue={props.coffeeShop.longitude} name="longitude" type="text" />
                </div>
                <button type="submit">Update Coffee Shop</button>
            </form>
            <button onClick={handleClick}>Destroy coffee shop</button>
        </div>
    );
}