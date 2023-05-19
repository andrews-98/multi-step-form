import { Route, Routes } from 'react-router-dom';
import { StepperMenu } from './components/StepperMenu';
import { PersonalInfo } from './pages/PersonalInfo/PersonalInfo';
import { Plan } from './pages/Plan/Plan';
import { AddOns } from './pages/AddOns/AddOns';
import { Summary } from './pages/Summury/Summary';
import './index.css';
import styled from 'styled-components';
import { Confirmed } from './pages/Confirmed/Confirmed';
import { useEffect, useState } from 'react';


const FormBoxWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 30.5rem;
  display: block;
  padding: 0;
  background: white;
  border-radius: 8px;
  margin-top: -3rem;

@media (min-width: 420px){
  width: 55rem;
  min-height: 30rem;
  padding: .5rem;
  border-radius: 8px;
  background: white;
  display:flex;
  margin-top: 0rem;
  }
`
const PagesContainer = styled.div`
 width: 100%;
 padding: 2rem 4rem 1rem;

 @media (max-width: 420px){
  padding: 2rem 2rem;
}
`

function App() {
  const { innerWidth: width } = window;
  const [windowDimension, setWindowDimension] = useState(width)

  useEffect(() => {
    setWindowDimension(width)
    console.log(width);
  }, [])

  return (
    <>
      {windowDimension < 420 && <StepperMenu windowDimension={windowDimension}></StepperMenu>}
      <FormBoxWrapper>
        {windowDimension > 420 && <StepperMenu></StepperMenu>}
        <PagesContainer>
          <Routes>
            <Route path='/' element={<PersonalInfo />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/add-ons' element={<AddOns />} />
            <Route path='/summary' element={<Summary />} />
            <Route path='/summary/confirmed' element={<Confirmed />} />
          </Routes>
        </PagesContainer>
      </FormBoxWrapper>
    </>
  );
}

export default App;
