import React from 'react';
import { NavLink } from 'react-router-dom';
import './AboutHome.css'

const AboutHome = () => {
    return (
        <div className="bg-pink-100 lg:py-24 AboutHome-area">
            <div className="container m-auto full-width-all py-24  shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center items-center px-4 ">

                    <div className="py-4">
                        <h1 className="text-white text-4xl font-semibold">Make Your All Tours with Us</h1>
                        <h1 className="text-white text-6xl font-semibold py-8">About Ourself</h1>
                        <p className="text-white text-lg font-semibold mt-8">
                            We provide international travel products & services including Flights, Accommodation, Land transport, Tours, Holiday packages, Visa processing among many other services.
                        </p>
                    </div>
                    <div className="py-4  ">
                        <NavLink className="text-white bg-pink-500 py-4 px-5 w-full block rounded-lg  text-xl font-semibold hover:bg-pink-700" to='/aboutUs'>Visit Us <i class="fas fa-arrow-right ml-2"></i></NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutHome;