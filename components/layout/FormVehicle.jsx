import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Input from './Input'
import Button from './Button'

const GlobalStyle = createGlobalStyle`
  body{
    padding-top: 40px;
  }

`

const StyledForm = styled.div`
  background-color: #fff;
  padding: 3rem 2rem;
  padding-bottom: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 38px;

  Button {
    align-self: flex-end;
  }

  @media screen and (min-width:${props => props.theme.brakepoints.laptopSize}) {
    background-color: ${props => props.theme.background};
  }
`

const FormVehicle = () => {
  return(
    <>
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