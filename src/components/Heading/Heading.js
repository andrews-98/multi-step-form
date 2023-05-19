import styled from "styled-components"

const HeadingWrapper = styled.div`
  line-height: 1.5;
`

const StyledTitle = styled.h1`
  font-size: 2rem;
  color: hsl(213, 96%, 18%);
`

const StyledParagraph = styled.p`
  font-size: 1rem;
  color: hsl(231, 11%, 63%);
`

export const Heading = ({ title, text }) => {
    return <HeadingWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledParagraph>{text}</StyledParagraph>
    </HeadingWrapper>
}