import React from 'react';
import { NavLink } from 'react-router-dom';
import './Banner.css';

// home page banner 

const Banner = () => {
    return (
        <div className=" banner-container">
            <div className="container m-auto px-2 py-12 md:py-20 lg:py-40 full-width-all">
                <div className="slider h-4/5    grid grid-cols-12">
                    <div className="col-span-12 md:col-span-8 text-white" >
                        <h1 className="text-4xl font-extrabold"> <span className="text-pink-500">TRAVEL</span>  MORE TO</h1>
                        <br />
                        <h1 className="text-6xl">DISCOVER YOURSELF</h1>
                        <br />
                        <h4 className="text-xl my-10">We provide travelers with an authentic Jordanian experience that they can remember for the rest of their lives</h4>
                        <NavLink className="rounded-full py-3 px-5 border-2 text-white text-lg font-semibold  hover:bg-pink-700 hover:border-pink-700 hover:text-white transition duration-500 ease-in-out " to="/services"> Explore Destination</NavLink>
                    </div >
                    <div className="col-span-6">
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;