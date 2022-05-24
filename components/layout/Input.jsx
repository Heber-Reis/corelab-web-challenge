import { forwardRef } from 'react'
import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;

  label {
    margin-left: 1rem;
  }
`

const InputContent = styled.div`
  width: 100%;
  height: ${props => props.width};
  display: flex;
  align-items: center;
  background-color: ${props => props.color};
  border-radius: 100px;
  padding: 0 34px;
  border: ${props => props.border};
  
  img{
    background-color: transparent;
  }
`

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  height: 100%;
  width: 100%;
  font-size: 1rem;
`

const Input = forwardRef((props,ref) => {
  return(
    <InputContainer>
      {
        props.label && 
        <label>{props.label}</label>
      }
      <InputContent {...props}>
        <img src={props.icon}/>
        <StyledInput {...props} ref={ref}/>
      </InputContent>
    </InputContainer>
  )
})

Input.defaultProps = {
  color: '#65DCC74D',
  border: 'none',
  width: '3rem'
}

export default Input

