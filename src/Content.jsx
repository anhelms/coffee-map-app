import axios from "axios";
import { useState, useEffect } from "react";
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";

export function Content () {
    const [coffee_shops, setCoffee_shops] = useState([]);

    const handleCoffeeShopsIndex = () => {
        console.log("handleCoffeeShopsIndex");
        axios.get("http://localhost:3000/coffee_shops.json").then((response) => {
            console.log(response.data);
            setCoffee_shops(response.data);
        });
    };

    useEffect(handleCoffeeShopsIndex, []);

    return (
        <div>
            <h1>Welcome to Coffee Maps!</h1>
            <CoffeeShopsIndex coffee_shops={coffee_shops} />
        </div>
    );
}