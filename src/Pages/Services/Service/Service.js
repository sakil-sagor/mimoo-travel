import React from 'react';
import { NavLink } from 'react-router-dom';
// import img13 from '../../../images/13.jpg'
import './Service.css'

const Service = (props) => {


    const { _id, name, country, continent, Description1, rating, price, img, category } = props.service;
    return (
        <div className="shadow-2xl bg-white rounded">
            <div className="p-3">
                <img className="rounded md:h-60 w-full" src={img} alt="" />
            </div>
            <div className="p-3">
                <div className="flex justify-between">
                    <div className="">
                        <h1 className="text-pink-500 font-bold text-2xl">{name}</h1>
                        <p className="text-gray-500 leading-8 text-md font-bold text-gray-400 italic tracking-wide">{country},{continent}</p>
                    </div>
                    <div className="text-gray-500">
                        <span className="text-2xl text-green-800 font-bold">$ {price}</span> /day
                    </div>
                </div>
                <h2 className="text-gray-400 mt-4">{Description1.slice(0, 90)} . . .</h2>

                <div className="flex pt-4 justify-between">
                    <NavLink className="transition duration-500 text-pink-500 bg-white hover:bg-pink-500 hover:text-white px-4 py-2 rounded font-semibold  mr-4 d-button " to={`services/${_id}`}> Details</NavLink>

                    <NavLink className="transition duration-500 bg-pink-500 text-white px-4 py-2 rounded font-semibold hover:text-pink-500 hover:bg-white mr-4  d-button-solid" to={`bookNow/${_id}`}>Book Now</NavLink>

                </div>
            </div>

        </div>
    );
};





export default Service;












