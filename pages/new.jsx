import styled, { createGlobalStyle } from 'styled-components'
import { useForm } from 'react-hook-form'

import FormVehicle from '../components/layout/FormVehicle'

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

const New = () => {

  const { register, handleSubmit } = useForm()

  return(
    <>
      <a href='/'><img src="Arrow.png" width={'30px'} /></a>
      <StyledForm>
        <FormVehicle />
        <GlobalStyle />
      </StyledForm>
    </>
  )
}

export default New