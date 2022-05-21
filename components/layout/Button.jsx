import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background-color: #65DCC7CC;
  border-radius: 100px;
  width: ${props => props.width};
  height: 3.5rem;
  font-size: 1.5rem;
`

const StyledIcon = styled.img`
  background-color: transparent;
  position: relative;
  left: -100px;
  top: -46px;

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    display: none;
  }
`

const Button = (props) => {
  return (
    <>
      <StyledButton
        onClick={props.onClick}
        width={props.width}
      >
        {props.children}
      </StyledButton>
      <StyledIcon src={props.icon}/>
    </>
    
  )
};

Button.defaultProps = {
  width: '100%'
}

export default Button;