import { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCardBox = styled.div`
    width: 10rem;
    padding: 1rem;
    margin-left: .5rem;
    border: 1px solid ${props => props.isActive ? 'hsl(213, 96%, 18%)' : 'hsl(229, 24%, 87%)'};
    border-radius: 8px;
    background: ${props => props.isActive ? 'hsl(217, 100%, 97%);' : 'transparent;'}
    cursor: pointer;


    &:hover{
        border-color: hsl(213, 96%, 18%);
        background: hsl(217, 100%, 97%);
    }

    @media (max-width:420px) {
        width: 100%;
        display:flex;
        margin-bottom: 1rem;
      }
`

const StyledIcon = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`

const StyledTitleBox = styled.div`
  margin-top: 3rem;

  @media (max-width:420px) {
   margin-top: .3rem;
   margin-left: 1rem;
  }
`

export const PlanCardItem = ({
    title,
    price,
    url,
    selectedPlanIndex,
    setSelectedPlanIndex,
    index,
    selectedPeriod
}) => {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (index === selectedPlanIndex) {
            setIsActive(true)
        } else {
            setIsActive(false)
        }
    }, [selectedPlanIndex])

    const handleClick = (index) => {
        setSelectedPlanIndex(index)
    }

    return <StyledCardBox isActive={isActive} onClick={() => handleClick(index)}>
        <StyledIcon src={url}></StyledIcon>
        <StyledTitleBox>
            <h3 style={{ color: 'hsl(213, 96%, 18%)' }}>{title}</h3>
            <p style={{ color: 'hsl(231, 11%, 63%)' }}>{price}</p>
            {selectedPeriod === 'yearly' && <p>2 months free</p>}
        </StyledTitleBox>
        {/* {selectedPeriod === 'yearly' && <p>2 months free</p>} */}
    </StyledCardBox>
} 