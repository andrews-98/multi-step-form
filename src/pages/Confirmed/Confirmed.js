import styled from "styled-components";

const StyledConfirmContainer = styled.div`
 height: 100%;
 line-height: 2;
 text-align: center;
 display: flex;
 justify-content: center;
 align-items: center;



 @media(max-width:420px) {
    margin-top: 3rem;
 }
`

const StyledTitle = styled.h2`
 font-weight: 700;
 color: hsl(213, 96%, 18%);
`
const StyledParagrapgh = styled.p`
 color: hsl(231, 11%, 63%);
`


export const Confirmed = () => {
    return <StyledConfirmContainer>
        <div>
            <img src="/assets/icon-thank-you.svg" />
            <StyledTitle>Thank You!</StyledTitle>
            <div style={{ lineHeight: '1.7' }}>
                <StyledParagrapgh>
                    Thanks for confirming our subsription!
                    We hope you have fun  using our platform. If you ever need suppurt,
                    please feel free to email  us at andriisinkevych1998@gmail.com
                </StyledParagrapgh>
            </div>
        </div>
    </StyledConfirmContainer>
}