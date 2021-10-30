import { useEffect, useState } from "react"


const useServices = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://infinite-island-58921.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))


    }, []);
    return [services]



}
export default useServices;