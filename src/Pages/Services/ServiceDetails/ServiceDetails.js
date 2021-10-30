import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppoinmentFrom from '../../Appointment/AppoinmentFrom/AppoinmentFrom';
import PageTitle from '../../Shared/PageTitle';
import './ServiceDetails.css'

const ServiceDetails = () => {

    const [service, setService] = useState({});
    const { serviceId } = useParams();
    console.log(serviceId);
    useEffect(() => {
        const url = `https://infinite-island-58921.herokuapp.com/services/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    console.log(service);
    return (
        <div>
            {/* page title area  */}
            <div className="service-detail-page-banner text-white py-12">
                <PageTitle title="Package Details"
                ></PageTitle>
            </div>
            {/* single doctor detail area main body  */}
            <div>
                <div className="container m-auto full-width-all  py-16 px-2">
                    {/* <div className=" md:col-span-5 lg:col-span-4">
                        <div className="text-left bg-pink-200 rounded-lg">
                            <div className="w-full">
                                <img className=" w-full" src={service?.img} alt="" />
                            </div>
                            <div className="p-3 text-center ">
                                <div className="border-b-2">
                                    <h1 className="text-xl font-bold text-pink-500 ">{service?.name}</h1>
                                    <h2 className="my-3 text-gray-600"> <span className="text-md font-bold">Specialist -</span> {service?.name} </h2>
                                    <h2 className="my-3 text-gray-600"> <span className="text-md font-bold ">Degree -</span> {service?.Degree} </h2>
                                </div>
                                <div className="flex items-start justify-between  text-gray-600 py-4 border-b-2 px-2">
                                    <p><i className="fas fa-envelope icon-teacher text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> {service?.email}</h3>
                                </div>
                                <div className="flex items-center justify-between   text-gray-600 py-4 border-b-2 px-2">
                                    <p><i class="fas fa-phone text-3xl pl-5"></i></p>
                                    <h3 className="text-lg">{service?.phone}</h3>
                                </div>
                                <div className="flex items-center justify-between  text-gray-600 py-4 border-b-2 px-2">
                                    <p><i class="fab fa-skype text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> {service?.skype}</h3>
                                </div>
                                <div className="flex items-center justify-between   text-gray-600 py-4 px-2">
                                    <p><i class="fas fa-link text-3xl pl-5"></i></p>
                                    <h3 className="text-lg"> www.health-aid.com</h3>
                                </div>
                            </div>
                        </div>
                        <div className="bg-pink-200 rounded-lg mt-12 p-4">
                            <i class="fas fa-headset text-pink-700 text-6xl"></i>
                            <h1 className="text-2xl font-bold text-pink-500 py-8">Emergency Cases</h1>
                            <p className="text-gray-500">Please feel welcome to contact our friendly reception staff with any general or medical enquiry call us.</p>
                            <div className="flex items-center justify-start   text-gray-600 py-8 ">
                                <p><i class="fas fa-phone text-3xl text-pink-700  mr-4"></i></p>
                                <h3 className="text-lg">{service?.phone}</h3>
                            </div>
                        </div>
                    </div> */}
                    <div className=" md:col-span-7 lg:col-span-8">
                        <div className="flex justify-between">
                            <div>
                                <h1 className="text-4xl font-bold text-pink-700">{service?.name}</h1>
                                <p className="text-gray-500 leading-8 text-md font-bold text-gray-500 italic tracking-wide">{service?.country}, {service?.continent}</p>
                                <p className="text-gray-500 leading-8 text-md font-bold text-yellow-600 tracking-wide">Rating: {service?.rating}</p>

                            </div>
                            <div className="">
                                <p className="text-gray-500 leading-8 text-xl font-bold tracking-wide mb-4">Price:  <span className="font-extrabold text-pink-800 text-3xl">${service?.price}</span>/day</p>
                                <a className="bg-pink-600 text-white  py-2 px-6 text-xl font-bold rounded-full hover:bg-pink-700" href="#book">Book Now</a>
                            </div>
                        </div>
                        <br />
                        <br />
                        <div className="w-full">
                            <img className="w-3/4 m-auto" src={service.img} alt="" />
                        </div>
                        <br />
                        <br />
                        <div>
                            <h1 className="text-4xl font-bold text-gray-700 py-8">Description</h1>
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                {service.Description1}
                            </p>
                            <br />
                            <p className="text-gray-500 leading-8 text-md tracking-wide">
                                {service.Description2}
                            </p>
                        </div>

                    </div>
                </div>
                <div className="bg-pink-50 py-24">
                    <div className="container m-auto full-width-all " id="book">
                        <div className="text-pink-500 font-bold text-4xl text-center pb-8 "> Make your Booking </div>
                        <hr className="w-16 border border-pink-500 mb-12 m-auto" />
                        <AppoinmentFrom key={service._id} service={service}></AppoinmentFrom>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;