import React, { useState } from 'react';
import PageTitle from '../Shared/PageTitle';
import Africa from './AllCategory/Africa';
import America from './AllCategory/America';
import Asia from './AllCategory/Asia';
import Australia from './AllCategory/Australia';
import Europe from './AllCategory/Europe';
import All from './AllCategory/All';
import spin from '../../images/9.gif'
import './Services.css'
import useServices from '../../Hooks/useServices';

const Services = () => {
    const [services] = useServices([]);
    const [toggleState, setToggleState] = useState(1);
    const toogleTab = (index) => {
        setToggleState(index);
    }

    return (
        <div className="bg-blue-100">
            {/* page title  */}
            <div className="services-page-banner">
                <div className="full-width-all container m-auto text-white">
                    <PageTitle
                        title="Our Packages"
                        content="We have the Best Packages and Offers for you."
                    ></PageTitle>
                </div>
            </div>
            {/* doctors area main body  */}
            <div className="full-width-all container m-auto py-16 min-h-screen	">
                <div className="doctors-area-all grid grid-cols-1  sm:grid-cols-12 lg:grid-cols-12 gap-4 ">
                    {/* category tab system area  */}
                    <div className="sm:col-span-4 lg:col-span-2  mt-2 px-2">
                        <div className="bg-white cate-box shadow-2xl rounded-lg">
                            <h3 className="text-center py-2 bg-pink-500 text-white font-semibold text-xl rounded-t-lg">Categories</h3>
                            <ul className="tab-list">
                                <li className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(1)} >All</li>
                                <li className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(2)}>Asia</li>
                                <li className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(3)}>America</li>
                                <li className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(4)}>Africa </li>
                                <li className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(5)}>Europe</li>
                                <li className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'} onClick={() => toogleTab(6)}>Australia </li>
                            </ul >
                        </div>
                    </div >
                    {/* show doctor list area  */}





                    <div className="tab-content-container sm:col-span-8 lg:col-span-10 transition ease-in  duration-700">
                        {
                            services.length ?
                                <div>
                                    <div className={toggleState === 1 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <All></All>
                                    </div>
                                    <div className={toggleState === 2 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <Asia></Asia>
                                    </div>
                                    <div className={toggleState === 3 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <America></America>
                                    </div>
                                    <div className={toggleState === 4 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <Africa></Africa>
                                    </div>
                                    <div className={toggleState === 5 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <Europe></Europe>
                                    </div>
                                    <div className={toggleState === 6 ? 'tab-content tab-active-content' : "tab-content"}>
                                        <Australia></Australia>
                                    </div>
                                </div>
                                :
                                <div ><img className="m-auto block" src={spin} alt="" /></div>
                        }
                    </div>
                </div >
            </div>


        </div>
    );
};

export default Services;