import styled from 'styled-components'

const InputContainer = styled.div`
  width: 100%;

  label {
    margin-left: 1rem;
  }
`

const InputContent = styled.div`
  height: 60px;
  width: 100%;
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
  
`

const Input = (props) => {
  return(
    <InputContainer>
      <label>{props.label}</label>
      <InputContent {...props}>
        <img src={props.icon} />
        <StyledInput {...props} />
      </InputContent>
    </InputContainer>
  )
}

Input.defaultProps = {
  color: '#65DCC74D',
  border: 'none'
}

export default Input

