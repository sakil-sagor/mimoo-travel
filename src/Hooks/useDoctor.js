import React, { useEffect, useState } from 'react';
// hooks for doctor details area 

const useDoctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('https://infinite-island-58921.herokuapp.com/doctors')
            .then(response => response.json())
            .then(data => setDoctors(data))
    }, []);
    return [doctors, setDoctors]

}

export default useDoctors;







