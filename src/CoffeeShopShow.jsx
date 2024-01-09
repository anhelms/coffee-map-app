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
            <h2>Coffee Shop information</h2>
            <p> Name: {props.coffeeShop.name}</p>
            <img src={props.coffeeShop.image} />
            <p>Latitude: {props.coffeeShop.latitude}</p>
            <p>Longitude: {props.coffeeShop.longitude}</p>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input defaultValue={props.coffeeShop.name} name="name" type="text" />
                </div>
                <div>
                    Image: <input defaultValue={props.coffeeShop.image_url} name="image_url" type="text" />
                </div>
                <div>
                    Latitude: <input defaultValue={props.coffeeShop.latitude} name="latitude" type="text" />
                </div>
                <div>
                    Longitude: <input defaultValue={props.coffeeShop.longitude} name="longitude" type="text" />
                </div>
                <button type="submit">Update Coffee Shop</button>
            </form>
            {props.coffeeShop.reviews.length > 0 ? (<div>
                <div>
                    Reviews:
                </div>
                {props.coffeeShop.reviews.map((review) => (
                    <div key={review.id}>
                        <div>
                            {review.description}
                        </div>
                        <div>
                            {review.rating}
                        </div>
                    </div>
                ))}
            </div>) : (<></>)}
            <button onClick={handleClick}>Destroy coffee shop</button>
        </div>
    );
}