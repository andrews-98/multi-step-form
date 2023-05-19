import styled, { css } from "styled-components"

const COLOR = {
    primary: css`
     background: hsl(213, 96%, 18%);
    `,
    secondary: css`
     background: rgb(0 77 255);
    `

}

const StyledButton = styled.button`

padding: 10px 15px;
border-radius: 8px;
background: hsl(213, 96%, 18%);
color: hsl(0, 0%, 100%);
font-size: 1rem;

&:hover {
    opacity: 0.8;
}
  cursor: pointer;
  border:none;
  transition: .2s all;

 ${props => props.color && COLOR[props.color]}
`

export const Button = ({ color, children, onClick }) => {
    return <StyledButton color={color} onClick={onClick}>{children}</StyledButton>
}