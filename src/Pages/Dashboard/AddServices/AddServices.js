import React, { useRef } from 'react';

const AddServices = () => {

    const getPackName = useRef('');
    const getCountryName = useRef('');
    const getContinentName = useRef('');
    const getFollowers = useRef('');
    const getImg = useRef('');
    const getRating = useRef('');
    const getPrice = useRef('');
    const getDescription1 = useRef('');
    const getDescription2 = useRef('');


    const handelRegister = e => {
        const name = getPackName.current.value;
        const country = getCountryName.current.value;
        const continent = getContinentName.current.value;
        const followers = getFollowers.current.value;
        const img = getImg.current.value;
        const rating = getRating.current.value;
        const price = getPrice.current.value;
        const Description1 = getDescription1.current.value;
        const Description2 = getDescription2.current.value;

        const newServices = { name, country, continent, followers, img, price, rating, Description1, Description2, }

        fetch(' https://infinite-island-58921.herokuapp.com/services', {
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
                    getPackName.current.value = getCountryName.current.value = getContinentName.current.value = getFollowers.current.value = getImg.current.value = getRating.current.value = getRating.current.value = getDescription1.current.value = getDescription2.current.value = '';


                }
            })
        e.preventDefault();
    }
    return (
        <div className="bg-blue-100 py-24">
            <div className="m-auto container full-width-all m-auto">
                <h2 className="text-center text-3xl">Please add service !</h2>
                <div className="m-auto w-8/12">
                    <form onSubmit={handelRegister} className="register-form mt-6">
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md " type="text" ref={getPackName} placeholder="Package Name" />
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md " type="text" ref={getCountryName} placeholder="Country Name" />
                        </div>
                        <br />
                        <div>
                            <select required className="py-2 px-4 w-full text-lg  rounded-md " ref={getContinentName}>select
                                <option value="" disabled selected>Select your option</option>
                                <option> Asia</option>
                                <option> Europe</option>
                                <option> America</option>
                                <option> Australia</option>
                                <option> Africa</option>
                            </select>
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md" type="number" ref={getFollowers} placeholder="Package Followers" />
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md" type="text" ref={getImg} placeholder=" IMG url" />
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md" type="number" step="0.01" ref={getRating} placeholder="Package Travel Rating" />
                        </div>
                        <br />
                        <div>
                            <input required className="py-2 px-4 w-full text-lg  rounded-md" type="number" step="0.01" ref={getPrice} placeholder="Price" />
                        </div>
                        <br />
                        <div>
                            <label > Short Description 1 </label>
                            <textarea required className="py-2 px-4 w-full text-lg  text-black rounded-md placeholder-gray-800" cols="30" placeholder="Short Description 1" rows="5" ref={getDescription1}> </textarea>
                        </div>
                        <br />
                        <div>
                            <label > Short Description 2 </label>
                            <textarea required className="py-2 px-4 w-full text-lg  rounded-md" cols="30" placeholder="Short Description 2" rows="5" ref={getDescription2} > </textarea>
                        </div>
                        <br />
                        <div>
                            <input className="py-2 px-4 text-lg text-white rounded-md bg-pink-600 cursor-pointer hover:bg-pink-700" type="submit" value="Add Service" />
                        </div>
                    </form>
                </div>
            </div >

        </div >
    );
};

export default AddServices;