import styled from "styled-components";
import { Heading } from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { StyledButtonWrapper } from "../Plan/Plan";
import { useContext, useEffect, useState } from "react";
import ServiceContext from "../../context/serviceContext";

const heading = {
    title: 'Finishing Up',
    text: 'Double check everything looks OK before confirming'
}

const StyledSummaryBox = styled.div`
 widht: 100%;
 background: hsl(217, 100%, 97%);
 padding: 2rem;
 margin-top: 30px;
`;
const StyledOptionTitle = styled.h3`
  font-size: 1rem;
  color: hsl(231, 11%, 63%);
  font-weight: 400;
`;

const StyledSelectedPlan = styled.h3`
  color: hsl(213, 96%, 18%);
`

const StyledFlex = styled.div`
  display: flex;
  justify-content:space-between;
  align-items:center;
  margin: 0 auto;
`;



export const Summary = () => {
    const navigate = useNavigate();
    const { selectedPlan, selectedAddOns } = useContext(ServiceContext);
    const [totalAmount, setTotalAmount] = useState(0);

    const getTotalAmout = () => {
        const tempArray = selectedAddOns.map((option) => {
            if (option !== undefined) {
                return selectedPlan.period === 'monthly' ? option.price.monthly : option.price.yearly
            }
        })
        tempArray.push(selectedPlan.price)

        const sum = tempArray.reduce((acc, cur) => {
            if (cur !== undefined) {
                acc += +cur?.replace(/[^0-9]/g, '')
            }
            return acc
        }, 0)

        setTotalAmount(sum)
    }

    useEffect(() => {
        getTotalAmout()
    }, [])


    const onSubmit = () => {
        navigate('confirmed')
    }

    return <div>
        <Heading title={heading.title} text={heading.text} />
        <StyledSummaryBox>
            <StyledFlex>
                <div>
                    <StyledSelectedPlan>{selectedPlan.title} {`(${selectedPlan.period})`}</StyledSelectedPlan>
                    <Link to={'/plan'}>Change</Link>
                </div>
                <StyledSelectedPlan>{selectedPlan.price}</StyledSelectedPlan>
            </StyledFlex>
            <br />
            <hr />
            <br />
            {selectedAddOns.map((option, i) => {
                if (option !== undefined) {
                    return <StyledFlex style={{ lineHeight: '1.7' }} key={i}>
                        <StyledOptionTitle>{option.title}</StyledOptionTitle>
                        <p style={{ color: 'hsl(213, 96%, 18%)' }}>
                            {selectedPlan.period === 'monthly' ?
                                option.price.monthly : option.price.yearly
                            }
                        </p>
                    </StyledFlex>
                }

            })}
        </StyledSummaryBox>
        <StyledFlex style={{ width: '80%', marginTop: '25px' }}>
            <StyledOptionTitle>Total {`(per ${selectedPlan.period === 'monthly' ? 'month' : 'year'})`}</StyledOptionTitle>
            <h2 style={{
                color: 'rgb(0 77 255)'
            }}>+${totalAmount}{selectedPlan.period === 'monthly' ? '/mo' : '/yr'}</h2>
        </StyledFlex>

        <StyledButtonWrapper>
            <Link to={'/add-ons'}>Go back</Link>
            <Button color={'secondary'} onClick={onSubmit}>Confirm</Button>
        </StyledButtonWrapper>
    </div>
}