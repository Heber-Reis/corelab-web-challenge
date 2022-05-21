import styled from 'styled-components'

const StyledCard = styled.div`
  padding: 0.5rem;
  text-align: left;
  color: #fff;
  text-decoration: none;
  font-weight: 100;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  background-color: ${props => props.theme.cardBackground};
  width: 223px;
  height: 191px;

  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  h2 {
    margin: 0 0 1rem 0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1rem;
  }
`
const StyledControls = styled.div`
  display: flex;
  justify-content: flex-end;
`
const StyledInfo = styled.div`
  
`

const Card = (props) => {

  const Edit = () =>{
    alert('Edita')
  }

  const Delete = () => {
    alert('Deleta')
  }

  const Favorite = () => {
    alert('Favorita')
  }

  return (
    <StyledCard>
      <StyledControls>
        <button onClick={Edit}>
          <img src="edit.png" width={"40px"} />
        </button>
        <button onClick={Delete}>
          <img src="delete.png" width={"20px"} />
        </button>
        <button onClick={Favorite}>
          <img src="Heart.png" width={"30px"} />
        </button>
      </StyledControls>
      <StyledInfo>
        <h2>{props.title}</h2>
        <p>
          <b>Preço:</b> {props.price} <br />
          <b>Descrição:</b> {props.description} <br />
          <b>Ano:</b> {props.year} <br />
          <b>Cor:</b> {props.color} <br />
        </p>
      </StyledInfo>
    </StyledCard>
  );
};

export default Card;