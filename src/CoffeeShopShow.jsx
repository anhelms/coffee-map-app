import React, { useState } from 'react';
import StarRating from './StarRating';


export function CoffeeShopsShow(props) {
    const [updateName, setUpdateName] = useState(props.coffeeShop.name);
    const [updateImage, setUpdateImage] = useState(props.coffeeShop.image_url);
    const [updateLatitude, setUpdateLatitude] = useState(props.coffeeShop.latitude);
    const [updateLongitude, setUpdateLongitude] = useState(props.coffeeShop.longitude);
    const [newRating, setNewRating] = useState(0);
    const [reviewDescription, setReviewDescription] = useState('');
    const [showReviewForm, setShowReviewForm] = useState(false);

    const handleUpdateNameChange = (event) => {
    setUpdateName(event.target.value);
    };

    const handleUpdateImageChange = (event) => {
        setUpdateImage(event.target.value);
    };

    const handleUpdateLatitudeChange = (event) => {
        setUpdateLatitude(event.target.value);
    };

    const handleUpdateLongitudeChange = (event) => {
        setUpdateLongitude(event.target.value);
    };

    const handleSubmitUpdate = (event) => {
        event.preventDefault();
        const params = {
            name: updateName,
            image_url: updateImage,
            latitude: updateLatitude,
            longitude: updateLongitude,
        };
        props.onUpdateCoffeeShop(props.coffeeShop.id, params, () => {
        });
    };


    const handleRatingUpdate = (value) => {
        setNewRating(value);
    };

    const handleReviewDescriptionChange = (event) => {
        setReviewDescription(event.target.value);
    };

    const handleSubmitReview = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
        params.append('rating', newRating);
        params.append('description',reviewDescription);

        props.onCreateReview(props.coffeeShop.id, params, () => {
            setNewRating(0);
            setReviewDescription('');
            event.target.reset();
        });
    };
  
    const handleClick = () => {
        props.onDestroyCoffeeShop(props.coffeeShop);
    };

    return (
        <div>
            <h2>Coffee Shop information</h2>
            <p> Name: {props.coffeeShop.name}</p>
            <img src={props.coffeeShop.image_url} width={200} height={200} />
            <p>Latitude: {props.coffeeShop.latitude}</p>
            <p>Longitude: {props.coffeeShop.longitude}</p>
            <form onSubmit={handleSubmitUpdate}>
                <div>
                    Name: <input value={updateName} onChange={handleUpdateNameChange} name="name" type="text" />
                </div>
                <div>
                    Image: <input value={updateImage} onChange={handleUpdateImageChange} name="image_url" type="text" />
                </div>
                <div>
                    Latitude: <input value={updateLatitude} onChange={handleUpdateLatitudeChange} name="latitude" type="text" />
                </div>
                <div>
                    Longitude: <input value={updateLongitude} onChange={handleUpdateLongitudeChange} name="longitude" type="text" />
                </div>
                <button className="update" type="submit">Update Coffee Shop</button>
            </form>

            <div>
            <h2>Reviews:</h2>
            {props.coffeeShop.reviews.length > 0 ? (
                props.coffeeShop.reviews.map((review) => (
                    <div key={review.id}>
                        <div>{review.description}</div>
                        <div>Rating: 
                                {[1, 2, 3, 4, 5].map((value) => (
                                    <span key={value}>
                                        {value <= review.rating ? '☕' : ''}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No reviews yet.</p>
            )}
            </div>

            {showReviewForm ? (
                <form onSubmit={handleSubmitReview}>
                    <div>
                        Review Description:
                        <br></br>
                        <textarea value={reviewDescription} onChange={handleReviewDescriptionChange} />
                    </div>
                    <div>
                        Rating:
                        <StarRating initialRating={newRating} onUpdateRating={handleRatingUpdate} />
                    </div>
                    <button className="updatereview" type="submit">Submit Review</button>
                </form>
            ) : (
                <button onClick={() => setShowReviewForm(true)}>Write a Review</button>
            )}

            <button className="remove" onClick={handleClick}>Destroy coffee shop</button>
        </div>
    );
}