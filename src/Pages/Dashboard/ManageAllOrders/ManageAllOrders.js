import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import SingleOrders from '../SingleOrders/SingleOrders';
import spin from '../../../images/9.gif'
const ManageAllOrders = () => {
    const [services] = useServices([]);
    const [orders, setOrders] = useState([])
    useEffect(() => [
        fetch('https://infinite-island-58921.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    ], [])

    return (
        <div className="py-24 container m-auto full-width-all">
            <h2 className="text-center text-2xl py-4">You can manage all orders from here.</h2>
            <hr />
            {
                services.length ?
                    <div>
                        {
                            orders.map(order => <SingleOrders key={order._id} order={order}></SingleOrders>)
                        }
                    </div>
                    :
                    <div ><img className="m-auto block" src={spin} alt="" /></div>
            }
        </div>
    );

};

export default ManageAllOrders;
