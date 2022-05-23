import styled from 'styled-components'
import { useRouter } from 'next/router'

import Card from "../components/layout/Card"
import Input from "../components/layout/Input"
import Button from '../components/layout/Button'
import { useEffect, useState } from 'react'

const Home = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p{
    align-self: flex-start;
  }

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    Button {
      max-width: 364px;
    }
  }
`

const Search = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  

  button {
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const AdsContainer = styled.div`
  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

function HomePage () {

  const route = new useRouter()

  const [showFilter, setShowFilter] = useState()
  const [Ads, setAds] = useState([])
  const [myAds, setMyAds] = useState([])


  return(
    <Home>
      <Search>
        <Input placeholder={"Buscar"} icon={"/Search.png"}/>
        <button onClick={() => route.push('/filter')}><img src={"/filter.png"}/></button>
      </Search>
      <Button icon={"/Add.png"} onClick={() => route.push('/new')}>ADICIONAR</Button>
      Meus anúncios: <br/>
      {
        myAds.map((element, key) =>
          <Card
            key={key}
            title={element.title}
            price={element.price}
            description={element.description}
            year={element.year}
            color={element.color}
          />)
      }
      <p>Anúncios:</p>
      <AdsContainer>
        
        {
          Ads.map((element, key) =>
            <Card
              key={key}
              title={element.title}
              price={element.price}
              description={element.description}
              year={element.year}
              color={element.color}
              showEditButton={false}
            />
          )
        }
      </AdsContainer>
    </Home>
  )
}

export default HomePage