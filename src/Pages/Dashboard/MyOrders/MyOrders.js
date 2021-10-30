import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import SingleMyOrder from './SingleMyOrder';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([])
    useEffect(() => [
        fetch('https://infinite-island-58921.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    ], [])

    const singleUserOrders = orders.filter(singleUserOrder => singleUserOrder.email === user?.email)
    console.log(singleUserOrders);
    return (
        <div className="py-24 container m-auto full-width-all">
            <h2 className="text-center text-3xl">My Orders!</h2>
            <div>
                {
                    singleUserOrders.map(order => <SingleMyOrder key={order._id} order={order}></SingleMyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;