import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledSwitchBox = styled.div`
    position: relative;
    margin-top: .31rem;
    display: inline-block;
    padding: .31rem 1.7rem;
`

const StyledInputBtn = styled.input`
   width: 0;
   height: 0;
   opacity: 0;
`

const StyledSwitchRound = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(213, 96%, 18%);
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;

    &:before {
        position: absolute;
        content: "";
        height: 1.3rem;
        width: 1.3rem;
        left: .25rem;
        bottom: .25rem;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
        transform: ${props => props.isSwitched && 'translateX(1.62rem)'};
    }
`



export const SwitchButton = ({ handleToggle, selectedPeriod }) => {
    const [isSwitched, setIsSwitched] = useState(false);

    const handleSwitch = () => {
        handleToggle()
        setIsSwitched(!isSwitched)
    }
    useEffect(() => {
        if (selectedPeriod === 'monthly') {
            setIsSwitched(false)
        } else {
            setIsSwitched(true)
        }

    }, [selectedPeriod])

    return <StyledSwitchBox>
        <StyledInputBtn type="checkbox" />
        <StyledSwitchRound isSwitched={isSwitched} onClick={handleSwitch}></StyledSwitchRound>
    </StyledSwitchBox>
}