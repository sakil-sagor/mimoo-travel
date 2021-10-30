import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './ProfileShortcut.css'

// profile area 

const ProfileShortcut = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="profile-shortcut bg-pink-700 shadow-2xl">
            <div>
                <div>
                    <img src="" alt="" />
                </div>
                {
                    user.displayName ? <h1 className="text-lg font-semibold text-pink-500">{user.displayName}</h1> : ''
                }
                <button className="py-2 px-3 bg-pink-500 text-white rounded-full my-4 hover:bg-pink-700" >View Profile</button>
                <br />
            </div>
            <hr />

            <div>
                <NavLink to="/addServices" className="text-pink-500 hover:text-pink-700 block text-white mt-3">Add Services</NavLink>
            </div>
            <div>
                <NavLink to="/myOrders" className="text-pink-500 hover:text-pink-700  block text-white mt-3">My Orders</NavLink>
            </div>
            <div>
                <NavLink to="/manageAllOrders" className="text-pink-500 hover:text-pink-700 block  text-white mt-3">Manage All Orders</NavLink>
            </div>

            <div>
                <button className="text-pink-500 hover:text-pink-700 text-white mt-3" onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
};

export default ProfileShortcut;