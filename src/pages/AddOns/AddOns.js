import { Heading } from "../../components/Heading/Heading";
import { AddOnsItem } from "./AddOnsItem";
import { Button } from "../../components/Button";
import { StyledButtonWrapper } from "../Plan/Plan";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ServiceContext from "../../context/serviceContext";
import { useEffect } from "react";

const heading = {
    title: 'Pick add-ons',
    text: 'Add-ons help enhance your gaming experience'
}

const ADD_ONS_OPTIONS = [
    {
        slag: 'online-service',
        title: 'Online Service',
        description: 'Access to multiplayer games',
        price: {
            monthly: '$1/mo',
            yearly: '$10/yr'
        }
    },
    {
        slag: 'larger-storage',
        title: 'Larger Storage',
        description: 'Extra 1TB of cloud save',
        price: {
            monthly: '$2/mo',
            yearly: '$20/yr'
        }
    },
    {
        slag: 'customizable-profile',
        title: 'Customizable profile',
        description: 'Custom theme on your profile',
        price: {
            monthly: '$2/mo',
            yearly: '$20/yr'
        }
    }
]

export const AddOns = () => {
    const navigate = useNavigate();
    const { selectedPlan: { period }, selectedAddOns, setSelectedAddOns } = useContext(ServiceContext);
    let tempArr = [...selectedAddOns]

    useEffect(() => {
        if(selectedAddOns){
            const selectedOnsIndex = selectedAddOns.map((item, i) => item && i)
            setSelectedAddOns(selectedOnsIndex)
        }
    }, [])

    const handleSelect = (i) => {
        if (tempArr[i] === i) {
            tempArr[i] = null
        } else {
            tempArr[i] = i
        }

        setSelectedAddOns(tempArr)
    }

    const goNext = () => {
        navigate('/summary')
        setSelectedAddOns(tempArr?.map(idx => ADD_ONS_OPTIONS[idx]))
    }

    const renderedAddOnsOptions = ADD_ONS_OPTIONS.map((option, i) => {
        return <div
            key={option.slag} style={{ marginTop: '15px' }}
        >
            <AddOnsItem
                option={option}
                period={period}
                index={i}
                handleClick={handleSelect}
                selected={selectedAddOns[i] === i ? true : false}
            />
        </div>
    })

    return <div>
        <Heading title={heading.title} text={heading.text}></Heading>
        {renderedAddOnsOptions}
        <StyledButtonWrapper>
            <Link to={'/plan'}>Go Back</Link>
            <Button color={'primary'} onClick={goNext}>Next Step</Button>
        </StyledButtonWrapper>
    </div>
}