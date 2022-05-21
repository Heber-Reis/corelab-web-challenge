import styled from 'styled-components'

import Card from "../components/layout/Card"
import Input from "../components/layout/Input"
import Button from '../components/layout/Button'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    Button {
      max-width: 364px;
    }
  }
`

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 34px;
  

  button {
    border: none;
  }
`

function HomePage () {
  return(
    <Home>
      <Search>
        <Input placeholder={"Search"} icon={"/Search.png"} />
        <button><img src={"/filter.png"}/></button>
      </Search>
      <Button icon={"/Add.png"}>ADICIONAR</Button>
      <Card 
        title={"SANDERO"}
        price={22900}
        description={"Carro em boas condições"}
        year={2001}
        color={"Vermelho"}
      />
    </Home>
  )
}

export default HomePage