import { useState } from "react";

export function CoffeeShopsNew(props) {
    const [uploadedImg, setUploadedImg] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        params.append("image_file", uploadedImg);
        props.onCreateCoffeeShop(params, () => event.target.reset());
    };

    const handleSetFile = event => {
        if (event.target.files.length > 0) {
        setUploadedImg(event.target.files[0]);
        }
    };

    return (
        <div className="form-container">
            <h2>New Coffee Shop</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    Name: <input name="name" type="text" />
                </div>
                <div className="form-group">
                    Address: <input name="address" type="text" />
                </div>
                <div className="form-group">
                    Upload Image Url: <input name="image" type="image_url" />
                </div>
                <div className="form-group">
                    Upload Image: <input name="image" type="file" onChange={handleSetFile} />
                </div>
                <button type="submit">Create Coffee Shop</button>
            </form>
        </div>
    );
}