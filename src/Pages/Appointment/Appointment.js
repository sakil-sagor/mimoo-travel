import React from 'react';
import PageTitle from '../Shared/PageTitle';
import SectionTitle from '../Shared/SectionTitle';
import './Appoinment.css'
import AppoinmentFrom from './AppoinmentFrom/AppoinmentFrom';
import PopulerServices from '../Shared/PopulerServices'

const Appointment = () => {
    return (
        <div>
            {/* appointment page title  */}
            <div className="appointment-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <PageTitle
                        title="Make a Booking"
                        content="Our administration and support staff all have exceptional people skills and trained to assist you with all Travel enquiries. "
                    ></PageTitle>
                </div>
            </div>
            {/* appointment main body  */}
            <div className="full-width-all container full-width-all m-auto px-2 py-24">
                <div>
                    <SectionTitle
                        title="Book Now..."
                        content="From budget travelers to ultra luxury 7 star tourists we cater to every need. Delivering value for your money is our prime goal. With a team of experienced travel professionals we deliver exactly what we promise. We do what we say & say what we do."
                    ></SectionTitle>
                </div>
                {/* appointment form  */}
                <div>
                    <AppoinmentFrom service=""></AppoinmentFrom>
                </div>
                <div className="mt-24">
                    <h1 className="text-2xl px-2 mb-8">People's Most Booking services and Most Visited Services.</h1>
                    <PopulerServices></PopulerServices>
                </div>

            </div>


        </div>
    );
};

export default Appointment;