import axios from "axios";
import { useState, useEffect } from "react";
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";
import { CoffeeShopsNew } from "./CoffeeShopsNew";
import { CoffeeShopsShow } from "./CoffeeShopShow";
import { Modal } from "./Modal";

export function Content () {
    const [coffee_shops, setCoffee_shops] = useState([]);
    const[isCoffeeShopsShowVisible, setIsCoffeeShopsShowVisible] = useState(false);
    const [currentCoffeeShop, setCurrentCoffeeShop] = useState({});

    const handleCoffeeShopsIndex = () => {
        console.log("handleCoffeeShopsIndex");
        axios.get("http://localhost:3000/coffee_shops.json").then((response) => {
            console.log(response.data);
            setCoffee_shops(response.data);
        });
    };

    const handleCreateCoffeeShop = (params, successCallback) => {
        console.log("handleCreateCoffeeShop", params);
        axios.post("http://localhost:3000/coffee_shops.json", params).then((response) => {
            setCoffee_shops([...coffee_shops, response.data]);
            successCallback();
        });
    };

    const handleShowCoffeeShop = (coffee_shop) => {
        console.log("handleShowCoffeeShop", coffee_shop);
        setIsCoffeeShopsShowVisible(true);
        setCurrentCoffeeShop(coffee_shop);
    };

    const handleUpdateCoffeeShop = (id, params, successCallback) => {
        console.log("handleUpdateCoffeeShop", params);
        axios.patch(`http://localhost:3000/coffee_shops/${id}.json`, params).then((response) => {
            setCoffee_shops(
                coffee_shops.map((coffee_shop) => {
                    if (coffee_shop.id === response.data.id) {
                        return response.data;
                    } else {
                        return coffee_shop;
                    }
                })
            );
            successCallback();
            handleClose();
        });
    };

    const handleDestroyCoffeeShop = (coffee_shop) => {
        console.log("handleDestroyCoffeeShop", coffee_shop);
        axios.delete(`http://localhost:3000/coffee_shops/${coffee_shop.id}.json`).then((response) => {
            setCoffee_shops(coffee_shops.filter((p) => p.id !== coffee_shop.id));
            handleClose();
        });
    };

    const handleClose = () => {
        console.log("handleClose");
        setIsCoffeeShopsShowVisible(false);
    };

    useEffect(handleCoffeeShopsIndex, []);

    return (
        <div>
            <h1>Welcome to Coffee Maps!</h1>
            <CoffeeShopsNew onCreateCoffeeShop={handleCreateCoffeeShop} />
            <CoffeeShopsIndex coffee_shops={coffee_shops} onShowCoffeeShop={handleShowCoffeeShop} />
            <Modal show={isCoffeeShopsShowVisible} onClose={handleClose}>
                <CoffeeShopsShow coffee_shop={currentCoffeeShop} onUpdateCoffeeShop={handleUpdateCoffeeShop} onDestroyCoffeeShop={handleDestroyCoffeeShop} />
            </Modal>
        </div>
    );
}