import React from 'react';
import './MyOrder.css'
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const SingleMyOrder = (props) => {
    const { _id, name, email, packName, status } = props.order;

    const location = useLocation();
    const history = useHistory();
    const redirect_url = '/myOrders';

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
                        // remove data live system 


                    }
                    history.push(redirect_url);
                });
        }

    }


    return (
        <div className="res-table">
            <div className="bg-pink-100 ">

                <table className="w-full mt-12">
                    <tr>
                        <th className>Order Id</th>
                        <th>Package Name</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Status</th>
                        <th className={status ? "hidden" : ""} >Permission</th>

                    </tr>
                    <tr >
                        <td >{_id}</td>
                        <td>{packName}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td className={status ? "text-white bg-pink-500" : ""}>{status ? 'Approved' : 'Pending'}</td>
                        <td className={status ? "hidden" : " bg-red-600 text-white hover:bg-red-700"}><button onClick={(e) => handelCancel(e)}>Delete<span className="hidden">{_id}</span></button></td>

                    </tr>

                </table>
            </div>


        </div >
    );
};

export default SingleMyOrder;