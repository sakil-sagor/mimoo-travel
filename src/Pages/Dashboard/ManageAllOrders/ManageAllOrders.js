import React, { useEffect, useState } from 'react';
import SingleOrders from '../SingleOrders/SingleOrders';

const ManageAllOrders = () => {


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
            <div>
                {
                    orders.map(order => <SingleOrders key={order._id} order={order}></SingleOrders>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;