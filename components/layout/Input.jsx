import styled from 'styled-components'

const InputContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #65DCC74D;
  border-radius: 100px;
  padding: 0 34px;

  img{
    background-color: transparent;
  }
`
const Icon = styled.div`
  background-color: transparent;
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
      <img src={props.icon}/>
      <StyledInput type={"text"} placeholder={props.placeholder}/>
    </InputContainer>
  )
}

export default Input