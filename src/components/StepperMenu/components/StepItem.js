import styled from "styled-components";

const StepListWrapper = styled.div`
 width: 85%;
 margin: .9rem 0rem 0rem .7rem;

`

const StepListContentBox = styled.div`
   textDecoration: none;
   display: flex;
   alignItems: center;
`

const CircleItem = styled.div`
 width: 2.5rem;
 height: 2.5rem;
 border: 1px solid white;
 border-radius: 50%;
 background: ${props => props.isActive && 'hsl(0, 0%, 100%)'};
 display:flex;
 justify-content: center;
 align-items:center;
 color: ${props => props.isActive ? 'black' : 'white'};


`

const HeadingBox = styled.div`
 padding-left: 1rem;
 color: white;

 @media (max-width: 420px){
    display: none;
  }
`

export const StepItem = ({ url, name, index, pathname }) => {
    const isActive = pathname === url;

    return <StepListWrapper>
        <StepListContentBox>
            <CircleItem isActive={isActive}>
                <h3>{index}</h3>
            </CircleItem>
            <HeadingBox>
                <h5 style={{ fontWeight: '100' }}>Step {index}</h5>
                <h3>{name}</h3>
            </HeadingBox>
        </StepListContentBox>
    </StepListWrapper >
}