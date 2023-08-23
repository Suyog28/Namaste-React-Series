import React, { useEffect, useState } from 'react';
import { FaStar, FaRupeeSign } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi"
import Shimmer from './Shimmer';
import { MENU_URL, CARD_IMAGE_CDN_URL } from '../utils/constants';
import { useParams } from 'react-router-dom';

const ResMenu = () => {
    const { id } = useParams();
    const [restName, setRestName] = useState(null);


    useEffect(() => {
        fetchMenu();
    }, [])


    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + id)
        const menu = await data.json();
        console.log(menu.data);
        setRestName(menu.data)

    }

    if (restName === null) {
        return <Shimmer />
    };

    const { name, cuisines, costForTwoMessage,
        avgRating, city, totalRatingsString,
        areaName, sla, cloudinaryImageId } = restName?.cards[0]?.card?.card?.info;


    const { itemCards } = restName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;



    return (
        <div className='Menu-Container'>
            <div className='Menu-res' >
                <div className='name-res'>
                    {/* <img className='cardMenu' src={CARD_IMAGE_CDN_URL + cloudinaryImageId} alt='menuIMage' /> */}
                    <h2>{name}</h2>
                    <p>{cuisines.join(",")}</p>
                    <p>{city}</p>
                </div>
                <div className='start-rating'>
                    <p><FaStar className='star' /> {avgRating} </p>
                    <h3>{totalRatingsString}</h3>
                    <h3>{areaName}</h3>
                </div>
            </div>
            <div className='time'>
                <h3><BiTimeFive className='star' />  {sla.deliveryTime} Min</h3>
                <h3> {costForTwoMessage}</h3>
            </div>
            <div className='cuisines-Name' >
                <div className='items-name'>
                    <h2>Name</h2>
                    <ul>
                        {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name}
                        </li>)}
                    </ul>
                </div>
                <div>
                    <h3>Prices</h3>
                    <ul>
                        {itemCards.map((items) => <li key={items.card.info.id}>{items.card.info.price / 100 || items.card.info.defaultPrice / 100}</li>)}
                    </ul>
                </div>

            </div >
        </div >
    )
}

export default ResMenu