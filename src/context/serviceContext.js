import { createContext } from "react";
import { useState } from "react";

const ServiceContext = createContext();

function Provider({ children }) {
    const [selectedPlan, setSelectedPlan] = useState({
        title: '',
        price: '',
        period: ''
    })
    const [selectedAddOns, setSelectedAddOns] = useState([])
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const valueToShare = {
        selectedPlan,
        setSelectedPlan,
        setSelectedAddOns,
        selectedAddOns,
        userDetails,
        setUserDetails
    }

    return <ServiceContext.Provider value={valueToShare}>
        {children}
    </ServiceContext.Provider>
}

export { Provider };
export default ServiceContext;