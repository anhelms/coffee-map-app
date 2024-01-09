import axios from "axios";
import { useState, useEffect } from "react";
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";
import { CoffeeShopsNew } from "./CoffeeShopsNew";
import { CoffeeShopsShow } from "./CoffeeShopShow";
import { Modal } from "./Modal";
import MyMap from "./MyMap";

export function Content () {
    const [coffeeShops, setCoffeeShops] = useState([]);
    const[isCoffeeShopsShowVisible, setIsCoffeeShopsShowVisible] = useState(false);
    const [currentCoffeeShop, setCurrentCoffeeShop] = useState({});

    const handleCoffeeShopsIndex = () => {
        console.log("handleCoffeeShopsIndex");
        axios.get("http://localhost:3000/coffee_shops.json").then((response) => {
            console.log(response.data);
            setCoffeeShops(response.data);
        });
    };

    const handleCreateCoffeeShop = (params, successCallback) => {
        console.log("handleCreateCoffeeShop", params);
        axios.post("http://localhost:3000/coffee_shops.json", params).then((response) => {
            setCoffeeShops([...coffeeShops, response.data]);
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
            setCoffeeShops(
                coffeeShops.map((coffee_shop) => {
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
            setCoffeeShops(coffeeShops.filter((p) => p.id !== coffee_shop.id));
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
            <img src="src/images/world.png" width="200" height="200" className="center" alt="globe with coffee ping" />
            <h1>Welcome to Coffee Maps!</h1>
            <h4>A directory for your local favorites</h4>
            <MyMap coffeeShops={coffeeShops} />
            <CoffeeShopsNew onCreateCoffeeShop={handleCreateCoffeeShop} />
            <h6>All Coffee Shops</h6>
            <CoffeeShopsIndex coffeeShops={coffeeShops} onShowCoffeeShop={handleShowCoffeeShop} />
            <Modal show={isCoffeeShopsShowVisible} onClose={handleClose}>
                <CoffeeShopsShow coffeeShop={currentCoffeeShop} onUpdateCoffeeShop={handleUpdateCoffeeShop} onDestroyCoffeeShop={handleDestroyCoffeeShop} />
            </Modal>
        </div>
    );
}