import { useContext, useEffect, useState } from "react";
import { Heading } from "../../components/Heading/Heading";
import { PlanCardItem } from "./PlanCardItem";
import { SwitchButton } from "../../components/Button/SwitchButton";
import styled from "styled-components";
import ServiceContext from "../../context/serviceContext";
import { Button } from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";



const heading = {
    title: 'Select your plan',
    text: 'You have the option of monthly or yearly billing.'
}

const PLAN_OPTIONS = [
    {
        title: 'Arcade',
        price: {
            monthly: '$9/mo',
            yearly: '$90/yr'
        },
        iconUrl: './assets/icon-arcade.svg',
    },
    {
        title: 'Advanced',
        price: {
            monthly: '$12/mo',
            yearly: '$120/yr'
        },
        iconUrl: './assets/icon-advanced.svg'
    },
    {
        title: 'Pro',
        price: {
            monthly: '$15/mo',
            yearly: '$150/yr'
        },
        iconUrl: './assets/icon-pro.svg'
    }
]

const PlanCardList = styled.div`
  max-width: 100%; 
  display: flex;
  margin-top: 1.5rem; 

  @media (max-width:420px) {
    justify-content: flex-start;
    flex-direction: column;
  }
`


const StyledSpanPeriodMonthly = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.isActive ? 'black' : 'hsl(231, 11%, 63%)'};
`

const StyledSpanPeriodYearly = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${props => props.isActive ? 'black' : 'hsl(231, 11%, 63%)'};
`

const BackgroundSwitchBtnWrapper = styled.div`
  width: 100%;
  height: 2rem;
  background: hsl(231, 100%, 99%);
  margin-top: 1rem;
`

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;

  @media (max-width:420px) {
    margin-top: 2.5rem;
  }
`

export const Plan = () => {
    const navigate = useNavigate();
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');
    const { selectedPlan, setSelectedPlan } = useContext(ServiceContext);

    // remember selected plan
    useEffect(() => {
        if (selectedPlan.title) {
            const index = PLAN_OPTIONS
                .reduce((acc, plan, i) => {
                    if (plan.title === selectedPlan.title) {
                        acc = i
                    }
                    return acc
                }, 0)
            setSelectedPlanIndex(index)
            setSelectedPeriod(selectedPlan.period)
        }
    }, [])



    const handleToggle = () => {
        setSelectedPeriod((curr) => (curr === 'monthly' ? 'yearly' : 'monthly'))
    }

    const goNext = () => {
        setSelectedPlan({
            ...selectedPlan,
            title: PLAN_OPTIONS[selectedPlanIndex].title,
            price: selectedPeriod === 'yearly' ? PLAN_OPTIONS[selectedPlanIndex].price.yearly
                : PLAN_OPTIONS[selectedPlanIndex].price.monthly,
            period: selectedPeriod
        })

        navigate('/add-ons')
    }


    const renderedPlanOptions = PLAN_OPTIONS.map((option, i) => {

        return <div key={option.iconUrl}>
            <PlanCardItem
                title={option.title}
                price={selectedPeriod === 'monthly' ? option.price.monthly : option.price.yearly}
                url={option.iconUrl}
                selectedPlanIndex={selectedPlanIndex}
                setSelectedPlanIndex={setSelectedPlanIndex}
                index={i}
                setSelectedPlan={setSelectedPlan}
                selectedPeriod={selectedPeriod}
            />
        </div>
    })

    return <div>
        <Heading title={heading.title} text={heading.text}></Heading>
        <PlanCardList >
            {renderedPlanOptions}
        </PlanCardList>
        <BackgroundSwitchBtnWrapper>
            <div style={{
                width: '15rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '0 auto'
            }}>
                <StyledSpanPeriodMonthly isActive={selectedPeriod === 'monthly'}>Monthly</StyledSpanPeriodMonthly>
                <SwitchButton
                    handleToggle={handleToggle}
                    selectedPeriod={selectedPeriod}
                />
                <StyledSpanPeriodYearly isActive={selectedPeriod === 'yearly'}>Yearly</StyledSpanPeriodYearly>
            </div>
        </BackgroundSwitchBtnWrapper>
        <StyledButtonWrapper>
            <Link to={'/'}>Go Back</Link>
            <Button color={'primary'} onClick={goNext}>Next Step</Button>
        </StyledButtonWrapper>
    </div>
}       