export function CoffeeShopsNew(props) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        props.onCreateCoffeeShop(params, () => event.target.reset());
    };

    return (
        <div className="form-container">
            <h2>New Coffee Shop</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    Name: <input name="name" type="text" />
                </div>
                <div className="form-group">
                    Latitude: <input name="latitude" type="text" />
                </div>
                <div className="form-group">
                    Longitude: <input name="longitude" type="text" />
                </div>
                <button type="submit">Create Coffee Shop</button>
            </form>
        </div>
    );
}