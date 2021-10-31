import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DirectBooking from '../DirectBooking/DirectBooking';

const BookNow = () => {
    const [service, setService] = useState({});
    const { bookNowId } = useParams();
    useEffect(() => {
        const url = `https://infinite-island-58921.herokuapp.com/services/${bookNowId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div className="container m-auto full-width-all">
            <div className=" m-auto shadow-2xl p-4 mt-8">
                <h1 className="text-2xl mb-4 text-gray-500 font-bold">Your selected Package.</h1>
                <hr />
                <div className="md:flex justify-between mt-4">
                    <div>
                        <h1 className="text-4xl font-bold text-pink-700">{service?.name}</h1>
                        <p className="text-gray-500 leading-8 text-md font-bold text-gray-500 italic tracking-wide">{service?.country}, {service?.continent}</p>
                        <p className="text-gray-500 leading-8 text-md font-bold text-yellow-600 tracking-wide">Rating: {service?.rating}</p>

                    </div>
                    <div className="">
                        <p className="text-gray-500 leading-8 text-xl font-bold tracking-wide mb-4">Price:  <span className="font-extrabold text-pink-800 text-3xl">${service?.price}</span>/day</p>
                    </div>
                </div>
            </div>
            <DirectBooking key={service._id} service={service}></DirectBooking>
        </div>
    );
};

export default BookNow;