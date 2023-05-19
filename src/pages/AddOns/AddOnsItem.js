import styled from "styled-components";

const AddOnsItemBox = styled.div`
   width: 100%;
   padding: 1rem;
   border: 1px solid ${props => props.selected ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)'};
   border-radius: 8px;
   background: ${props => props.selected && 'hsl(206, 94%, 87%)'};
   margin-bottom: 15px;
   display: flex;
   align-items:center;
   justify-content: space-between;
   cursor: pointer;
`

const StyledInput = styled.input`
   transform: scale(1.5);
`

const StyledAddOnsTitle = styled.div`
   display: inline-block;
   margin-left: 15px;
`

export const AddOnsItem = ({ option, period, index, handleClick, selected }) => {

    return <AddOnsItemBox onClick={() => handleClick(index)} selected={selected}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor={option.slag}>
                <StyledInput type="checkbox" readOnly checked={selected} name={option.slag} />
            </label>
            <StyledAddOnsTitle>
                <h3 style={{ color: 'hsl(213, 96%, 18%)' }}>{option.title}</h3>
                <p style={{ color: 'hsl(231, 11%, 63%)' }}>{option.description}</p>
            </StyledAddOnsTitle>
        </div>
        <div>
            <p style={{ color: 'hsl(228, 100%, 84%)' }}>{period === 'monthly' ? option.price.monthly : option.price.yearly}</p>
        </div>
    </AddOnsItemBox>
}