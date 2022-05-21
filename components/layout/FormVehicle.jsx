import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Input from './Input'
import Button from './Button'

const GlobalStyle = createGlobalStyle`
  body{
    padding-top: 40px;
  }

  a{
    position: relative;
    top: -30px;
  }
`

const StyledForm = styled.div`
  background-color: #fff;
  padding: 5rem 2rem;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 38px;

  Button {
    align-self: flex-end;
  }
`

const FormVehicle = () => {
  return(
    <>
      <a href='/'><img src="Arrow.png" width={'30px'} /></a>
      <StyledForm>
        <GlobalStyle />
        <Input color={'transparent'} border={'1px solid black'} label={'Nome:'} />
        <Input color={'transparent'} border={'1px solid black'} label={'Marca:'} />
        <Input color={'transparent'} border={'1px solid black'} label={'Cor:'} />
        <Input color={'transparent'} border={'1px solid black'} label={'Ano:'} />
        <Input color={'transparent'} border={'1px solid black'} label={'Placa:'} />
        <Button width={'8rem'}>SALVAR</Button>
      </StyledForm>
    </>

  )
}

export default FormVehicle