import React from 'react';
import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';

// doctor category 

const Africa = () => {
    const [services] = useServices([]);


    let result = services.filter(service => service.continent === "Africa")
    console.log(result);
    return (
        <div className="grid  md:grid-cols-2  md:gap-x-8 gap-y-8 ">
            {
                result.map(service => <Service key={service.id} service={service}></Service>)
            }
        </div>
    );
};

export default Africa;