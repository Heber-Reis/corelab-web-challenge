import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { useForm } from 'react-hook-form'

import Input from "../components/layout/Input"
import Button from '../components/layout/Button'
import MyAds from '../components/VehicleCards/MyAds'
import API from  '../services/api'

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

const Search = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 34px;
  position: relative;
  
  button {
    border: none;
    height: 100%;
    display: flex;
    align-items: center;
  }
`

const SearchButton = styled.button`
  position: absolute;
  right: 4rem;
`

const SearchArrow = styled.img`
  transform: rotate(180deg);
  width: 30px;
`

function HomePage () {

  const route = useRouter()
  const cookies = new Cookies()
  const {register, handleSubmit} = useForm()

  const [receivedData, setReceivedData] = useState([])
  const [Ads, setAds] = useState([])
  const [myAds, setMyAds] = useState([])
  const [favorites, setFavorites] = useState([])

  const organizeData = () => {

    const AdsData = []
    const myAdsData = []
    const FavoritesData = []
    receivedData.map((element) => {
      if(element.isFavorite === true) { 
        FavoritesData.push(element)
      }
      if(element.user === 'user1') {
        myAdsData.push(element)
      }
      else { 
        AdsData.push(element)
      }
    })
    setAds(AdsData)
    setMyAds(myAdsData)
    setFavorites(FavoritesData)
  }

  const getVehicles = () =>{

    API.get('/vehicles/get_all').then(({data}) => {
        setReceivedData(data)
      }
    ).catch((err) => console.log(err.response))

  }

  useEffect(getVehicles,[])
  useEffect(organizeData,[receivedData])

  const changeFavorites = (idVehicle, isFavorite) => {

    API.post('/vehicles/set_favorite',{
      _id: idVehicle,
      isFavorite: !isFavorite
    }).then((res) => {
      if(res.status === 200){
        getVehicles()
      }
    })

  }

  const Edit = (key) =>{
    cookies.set('selected_vehicle', myAds[key])
    route.push('/update')
  }

  const Delete = (idVehicle) => {
    API.delete(`/vehicles/delete/${idVehicle}`).then((res) => {
      if(res.status === 200){
        alert('Veículo deletado com sucesso')
        getVehicles()
      }
    })
  }

  const handleSearch = (data) => {
    API.get('/vehicles/get_filtered',{
      params: {
        keyword: data.search,
        filters: cookies.get('InfoFilters')
      }
    }).then(({data}) => {
      setReceivedData(data)
    })
  }

  return(
    <Home>
      <Search onSubmit={handleSubmit(handleSearch)}>
        <Input placeholder={"Buscar"} icon={"/Search.png"} {...register('search')}/>
        <SearchButton type={'submit'}><SearchArrow src={'/Arrow.png'}/></SearchButton>
        <button onClick={() => route.push('/filter')}><img src={"/filter.png"}/></button>
      </Search>
      <Button icon={"/Add.png"} onClick={() => route.push('/new')}>ADICIONAR</Button>
      {
        myAds.length > 0 &&
        <MyAds
          Ads={myAds}
          NameSection={'Meus Anúncios:'}
          changeFavorites={(idVehicle,isFavorite) => changeFavorites(idVehicle,isFavorite)}
          Edit={(key) => Edit(key)}
          Delete={(idVehicle) => Delete(idVehicle)}
        />
      }
      {
        favorites.length > 0 &&
        <MyAds
          Ads={favorites}
          NameSection={'Favoritos:'}
          isFavorite={true}
          changeFavorites={(idVehicle, isFavorite) => changeFavorites(idVehicle, isFavorite)}
          Delete={(idVehicle) => Delete(idVehicle)}
        />
      }
      {
        Ads.length > 0 &&
        <MyAds
          Ads={Ads}
          NameSection={'Anúncios:'}
          changeFavorites={(idVehicle,isFavorite) => changeFavorites(idVehicle, isFavorite)}
          Delete={(idVehicle) => Delete(idVehicle)}
        />
      }
    </Home>
  )
}

export default HomePage