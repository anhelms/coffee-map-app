import axios from "axios";
import { useState } from "react";

export function Signup() {
    const [errors, setErrors] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors([]);
        const params = new FormData(event.target);
        axios
            .post("/users.json", params)
            .then((response) => {
                console.log(response.data);
                event.target.reset();
                window.location.href = "/";
            });
    };

    return(
        <div id="signup" className="form-container">
            <h5 className="signup">Signup</h5>
            <ul>
                {errors.map((error) => (
                    <li key={error}>{error}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    Name: <input name="name" type="text" />
                </div>
                <div className="form-group">
                    Email: <input name="email" type="text" />
                </div>
                <div className="form-group">
                    Password: <input name="password" type="password" />
                </div>
                <div className="form-group">
                    Password confirmation: <input name="password_confirmation" type="password" />
                </div>
                <div className="form-group">
                    Profile Picture: <input name="image_url" type="file" onChange={handleSetFile} />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}