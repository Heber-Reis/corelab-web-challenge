import styled, { createGlobalStyle } from 'styled-components'

import FormVehicle from '../layout/FormVehicle'

const StyledForm = styled.div`
  box-shadow: 2px 2px 5px -5px #000;
`

const GlobalStyle = createGlobalStyle`
  body{
    position: relative;
  }

  a{
    position: absolute;
    top: 0.2rem;
  }

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}) { 
    body {
      padding: 2rem 10rem;
      height: 100%;
    }

    a{
      top: 1rem;
      left: 1rem;
    }
  }
  
`

const VehicleForm = (props) => {

  return(
    <>
      <a href='/'><img src="Arrow.png" width={'30px'} /></a>
      <StyledForm>
        <FormVehicle handleSubmit={props.handleSubmit}/>
        <GlobalStyle />
      </StyledForm>
    </>
  )
}

export default VehicleForm