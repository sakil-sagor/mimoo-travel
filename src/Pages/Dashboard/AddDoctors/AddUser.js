import React, { useEffect, useRef, useState } from 'react';


const AddUser = () => {
    const getName = useRef('');
    const getCategory = useRef('');
    const getFollowers = useRef('');
    const getImg = useRef('');
    const getRating = useRef('');
    const getPrice = useRef('');
    const getDescription1 = useRef('');
    const getDescription2 = useRef('');


    const handelRegister = e => {
        const name = getName.current.value;
        const category = getCategory.current.value;
        const followers = getFollowers.current.value;
        const img = getImg.current.value;
        const rating = getRating.current.value;
        const price = getPrice.current.value;
        const Description1 = getDescription1.current.value;
        const Description2 = getDescription2.current.value;

        const newServices = { name, category, followers, img, price, rating, Description1, Description2, }

        fetch('https://infinite-island-58921.herokuapp.com/services', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newServices)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("success")
                    // getName.current.value = getCategory.current.value = getFollowers.current.value = getImg.current.value = getRating.current.value = getDescription1.current.value = getDescription2.current.value = '';


                }
            })
        e.preventDefault();
    }


    return (
        <div className="bg-blue-100 py-24">
            <div className="m-auto container full-width-all m-auto">
                <h2 className="text-center text-3xl">This is add services page</h2>
                <div className="m-auto w-8/12">
                    <form onSubmit={handelRegister} className="register-form ">
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md " type="text" ref={getName} placeholder="Country Name" />
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md" type="text" ref={getCategory} placeholder="category" />
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md" type="number" ref={getFollowers} placeholder="Country Followers" />
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md" type="text" ref={getImg} placeholder=" IMG url" />
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md" type="number" step="0.01" ref={getRating} placeholder="Country Travel Rating" />
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 w-full text-lg  rounded-md" type="number" step="0.01" ref={getPrice} placeholder="Price" />
                        </div>
                        <br />
                        <div>
                            <textarea className="py-2 px-4 w-full text-lg  text-black rounded-md placeholder-gray-800" cols="30" rows="5" ref={getDescription1} placeholder="Your Description-1"> </textarea>
                        </div>
                        <br />
                        <div>
                            <textarea className="py-2 px-4 w-full text-lg  rounded-md" cols="30" rows="5" ref={getDescription2} placeholder="Your Description-2"> </textarea>
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 text-lg  rounded-md bg-pink-700 cursor-pointer" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};
export default AddUser;