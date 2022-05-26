import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useForm } from 'react-hook-form'

import Input from './Input'
import Button from './Button'

const GlobalStyle = createGlobalStyle`
  body{
    padding-top: 40px;
  }

`

const StyledForm = styled.form`
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

const FormVehicle = (props) => {

  const { register, handleSubmit } = useForm()

  return(
    <>
      <GlobalStyle />
      <StyledForm onSubmit={handleSubmit(props.handleSubmit)}>
        <Input color={'transparent'} border={'1px solid black'} label={'Nome:'} {...register('title')}/>
        <Input color={'transparent'} border={'1px solid black'} label={'Marca:'} {...register('brand')} />
        <Input color={'transparent'} border={'1px solid black'} label={'Descrição:'} {...register('description')} />
        <Input color={'transparent'} border={'1px solid black'} label={'Valor:'} {...register('price')}/>
        <Input color={'transparent'} border={'1px solid black'} label={'Cor:'} {...register('color')} />
        <Input color={'transparent'} border={'1px solid black'} label={'Ano:'} {...register('year')}/>
        <Input color={'transparent'} border={'1px solid black'} label={'Placa:'} {...register('licensePlate')}/>
        <Button width={'8rem'} type={'submit'}>SALVAR</Button>
      </StyledForm>
    </>

  )
}

export default FormVehicle