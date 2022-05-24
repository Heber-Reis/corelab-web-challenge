import styled from 'styled-components'
import { useRouter } from 'next/router'

import Input from "../components/layout/Input"
import Button from '../components/layout/Button'
import { useEffect, useState } from 'react'
import MyAds from '../components/VehicleCards/MyAds'
import { useForm } from 'react-hook-form'

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

  const route = new useRouter()
  const {register, handleSubmit} = useForm()

  const [showFilter, setShowFilter] = useState()
  const [Ads, setAds] = useState([{title: 'teste1'},{title: 'teste'},{title: 'teste'},{title: 'teste'}])
  const [myAds, setMyAds] = useState([{title: 'teste'}])
  const [favorites, setFavorites] = useState([{title: 'teste'}])

  const changeFavorites = (key, isFavorite, Section) => {
    console.log(key, isFavorite, Section)

    if(isFavorite){
      if(Section === 'Ads'){
        setFavorites([...favorites, { ...Ads[key], section: 'Ads' }])
        Ads.splice(key,1)
      }
      if(Section === 'myAds'){
        setFavorites([...favorites,{ ...myAds[key], section: 'myAds' }])
        myAds.splice(key,1)
      }
    }
    else{
      if(favorites[key].section === 'Ads'){
        setAds([...Ads,favorites[key]])
      }else{
        setMyAds([...myAds,favorites[key]])
      }
      favorites.splice(key,1)
      setFavorites([...favorites])
    }
  }

  const Edit = (key) =>{
    console.log('Editando ',myAds[key])
  }

  const Delete = (key, section) => {
    console.log(key, section)
    switch(section){
      case 'myAds': myAds.splice(key,1); setMyAds([...myAds]); break
      case 'Ads' : Ads.splice(key,1); setAds([...Ads]); break
      case 'Favorites': favorites.splice(key,1); setFavorites([...favorites]); break
    }
  }

  const handleSearch = (data) => {
    console.log(data)
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
          changeFavorites={(key, isFavorite) => changeFavorites(key, isFavorite,'myAds')}
          Edit={(key) => Edit(key)}
          Delete={(key) => Delete(key,'myAds')}
        />
      }
      {
        favorites.length > 0 &&
        <MyAds
          Ads={favorites}
          NameSection={'Favoritos:'}
          showEditButton={false}
          isFavorite={true}
          changeFavorites={(key, isFavorite) => changeFavorites(key, isFavorite,'Favorites')}
          Delete={(key) => Delete(key,'Favorites')}
        />
      }
      {
        Ads.length > 0 &&
        <MyAds
          Ads={Ads}
          NameSection={'Anúncios:'}
          showEditButton={false}
          changeFavorites={(key, isFavorite) => changeFavorites(key, isFavorite,'Ads')}
          Delete={(key) => Delete(key,'Ads')}
        />
      }
    </Home>
  )
}

export default HomePage