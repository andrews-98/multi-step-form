import styled from "styled-components";
import { StepItem } from "./components/StepItem";
import { useLocation } from "react-router-dom";

const StepperBox = styled.div`
  min-width: 15rem;
  background-image: 
  ${props => props.windowDimension <= 420 ? 'url(./assets/bg-sidebar-mobile.svg)' :
        'url(./assets/bg-sidebar-desktop.svg)'};
  background-position: center;
  background-size: cover;
  

 
`

const StepperContainer = styled.div`
  border-radius: 8px;
  display:flex;
  flex-direction:column;

@media (max-width: 420px){
    width: 100%;
    height: 11rem;
    padding-top: 1.5rem;
    flex-direction:row;
    justify-content: center;
    border-radius: 0px;
    background-position: top;
  }
`

const navLink = [
    {
        url: '/',
        name: 'Your Info'
    },
    {
        url: '/plan',
        name: 'Select your plan'
    },
    {
        url: '/add-ons',
        name: 'Add-ons'
    },
    {
        url: '/summary',
        name: 'Summary'
    }
]


export const StepperMenu = ({ windowDimension }) => {
    const { pathname } = useLocation();
    return <StepperBox windowDimension={windowDimension}>
        <StepperContainer>
            {navLink.map((path, i) => {
                return <div key={i}>
                    <StepItem url={path.url} name={path.name} index={i + 1} pathname={pathname}></StepItem>
                </div>
            })}
        </StepperContainer>
    </StepperBox>
}