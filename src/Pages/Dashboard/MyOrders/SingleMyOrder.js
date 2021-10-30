import React from 'react';

const SingleMyOrder = (props) => {
    const { _id, name, email, packName, status } = props.order;
    return (
        <div className="bg-pink-100">
            <table className="w-full mt-12">
                <tr>
                    <th className>Order Id</th>
                    <th>Package Name</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Status</th>

                </tr>
                <tr >
                    <td >{_id}</td>
                    <td>{packName}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td className={status ? "text-white bg-pink-500" : ""}>{status ? 'Approved' : 'Pending'}</td>

                </tr>

            </table>

        </div >
    );
};

export default SingleMyOrder;