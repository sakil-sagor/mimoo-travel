import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useRef, useState } from 'react';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import './SingleOrders.css'

const SingleOrders = (props) => {
    const { _id, name, email, packName, status } = props.order;

    // const [orders, setOrders] = useState([]);
    // useEffect(() => [
    //     fetch('https://infinite-island-58921.herokuapp.com/orders')
    //         .then(res => res.json())
    //         .then(data => setOrders(data))
    // ], [])

    let handelAccept = (e) => {
        const proceed = window.confirm("Are you sure, You want to Accept this order?")
        if (proceed) {
            let sliceId = e.target.textContent.slice(6);
            const url = `https://infinite-island-58921.herokuapp.com/orders/${sliceId}`;
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
                    }
                })
        }
    };
    const handelCancel = (e) => {
        const proceed = window.confirm("Are you sure, You want to delete it?")
        if (proceed) {
            let sliceId = e.target.textContent.slice(6);
            const url = `https://infinite-island-58921.herokuapp.com/orders/${sliceId}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully delete the data.')

                    }
                });
        }
    }
    return (
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
                        <td >{_id}</td>
                        <td>{packName}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td className={status ? "text-white bg-pink-500" : ""}>{status ? 'Approved' : 'Pending'}</td>


                        {
                            !status ?
                                <td className="bg-green-600 text-white hover:bg-green-700"><button onClick={e => handelAccept(e)}>Accept<span className="hidden">{_id}</span> </button></td>
                                : ''
                        }
                        <td className="bg-red-600 text-white hover:bg-red-700"><button onClick={(e) => handelCancel(e)}>Delete<span className="hidden">{_id}</span></button></td>

                    </tr>

                </table>

            </div >
        </div>

    );
};

export default SingleOrders;