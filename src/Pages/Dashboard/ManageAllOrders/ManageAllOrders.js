import React, { useEffect, useState } from 'react';
import useServices from '../../../Hooks/useServices';
import spin from '../../../images/9.gif'
import '../SingleOrders/SingleOrders.css'

const ManageAllOrders = () => {

    const [services] = useServices([]);
    const [orders, setOrders] = useState([])
    const [update, setUpdate] = useState(0)
    useEffect(() => [
        fetch('https://infinite-island-58921.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    ], [update])

    let handelAccept = (id) => {
        const proceed = window.confirm("Are you sure, You want to Accept this order?")
        if (proceed) {

            const url = `https://infinite-island-58921.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Update Successful.')
                        // const remainingData = orders.map(user => user)
                        setUpdate(update + 1)
                    }
                })
        }
    };
    const handelCancel = (id) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {

            const url = `https://infinite-island-58921.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.')
                        const remainingData = orders.filter(user => user._id !== id)
                        setOrders(remainingData)
                    }
                });
        }
    }
    return (
        <div className="py-24 container m-auto full-width-all">
            <h2 className="text-center text-2xl py-4">You can manage all orders from here.</h2>
            <hr />
            {
                services.length ?
                    <div>
                        {
                            orders.map(order =>
                                <div className="res-table">
                                    <div className="">
                                        <table className="w-full mt-12">
                                            <tr>
                                                <th className>Order Id</th>
                                                <th>Package Name</th>
                                                <th>Customer Name</th>
                                                <th>Customer Email</th>
                                                <th>Status</th>
                                                <th colSpan="2" >Permission</th>
                                            </tr>
                                            <tr >
                                                <td >{order._id}</td>
                                                <td>{order.packName}</td>
                                                <td>{order.name}</td>
                                                <td>{order.email}</td>
                                                <td className={order.status ? "text-white bg-pink-500" : ""}>{order.status ? 'Approved' : 'Pending'}</td>
                                                {
                                                    !order.status ?
                                                        <td className="bg-green-600 text-white hover:bg-green-700"><button onClick={() => handelAccept(order._id)}>Accept </button></td>
                                                        : ''
                                                }
                                                <td className="bg-red-600 text-white hover:bg-red-700"><button onClick={() => handelCancel(order._id)}>Delete</button></td>

                                            </tr>

                                        </table>

                                    </div >
                                </div>


                            )
                        }
                    </div>
                    :
                    <div ><img className="m-auto block" src={spin} alt="" /></div>
            }
        </div>
    );

};

export default ManageAllOrders;




















































/* import React, { useEffect, useState } from 'react';
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

export default ManageAllOrders; */
