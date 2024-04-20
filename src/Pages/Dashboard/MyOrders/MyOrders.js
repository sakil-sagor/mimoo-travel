import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useServices from "../../../Hooks/useServices";
import spin from "../../../images/9.gif";
import "../SingleOrders/SingleOrders.css";

const MyOrders = () => {
  const [services] = useServices([]);
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(
    () => [
      fetch("https://mimoo-server.vercel.app/orders")
        .then((res) => res.json())
        .then((data) => setOrders(data)),
    ],
    []
  );

  const handelCancel = (id) => {
    const proceed = window.confirm("Are you sure, You want to delete it?");
    if (proceed) {
      const url = `https://mimoo-server.vercel.app/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully delete the data.");
            // remove data live system
            const remainingData = orders.filter((user) => user._id !== id);
            setOrders(remainingData);
          }
        });
    }
  };
  const singleUserOrders = orders.filter(
    (singleUserOrder) => singleUserOrder.email === user?.email
  );
  return (
    <div className="py-24 container m-auto full-width-all">
      <h2 className="text-center text-3xl">My Orders!</h2>

      <div>
        {services.length ? (
          singleUserOrders.map((order) => (
            <div className="res-table">
              <div className="bg-pink-100 ">
                <table className="w-full mt-12">
                  <tr>
                    <th className>Order Id</th>
                    <th>Package Name</th>
                    <th>Customer Name</th>
                    <th>Customer Email</th>
                    <th>Status</th>
                    <th className={order.status ? "hidden" : ""}>Permission</th>
                  </tr>
                  <tr>
                    <td>{order._id}</td>
                    <td>{order.packName}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td
                      className={order.status ? "text-white bg-pink-500" : ""}
                    >
                      {order.status ? "Approved" : "Pending"}
                    </td>
                    <td
                      className={
                        order.status
                          ? "hidden"
                          : " bg-red-600 text-white hover:bg-red-700"
                      }
                    >
                      <button onClick={() => handelCancel(order._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          ))
        ) : (
          <div>
            <img className="m-auto block" src={spin} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
