export function CoffeeShopsNew(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateCoffeeShop(params, () => event.target.reset());
    };

    return (
        <div>
            <h1>New Coffee Shop</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    Name: <input name="name" type="text" />
                </div>
                <div>
                    Latitude: <input name="latitude" type="text" />
                </div>
                <div>
                    Longitude: <input name="longitude" type="text" />
                </div>
                <button type="submit">Create Coffee Shop</button>
            </form>
        </div>
    );
}