import styled, {createGlobalStyle} from 'styled-components'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'

import SelectBox from '../components/layout/SelectBox'
import Button from '../components/layout/Button'
import Input from '../components/layout/Input'
import API from '../services/api'


const GlobalStyle = createGlobalStyle`

  body{
    display: flex;
    align-items: center;
    padding-top: 0;
    position: relative;
  }

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}) { 
    body {
      padding: 0 10rem;
      height: 100vh;
    }
  }
`

const Link = styled.a`
  position: absolute;
  top: 1rem;
  left: 0.5rem;
`

const StyledFilter = styled.form`
  padding: 3rem 2rem 1rem ;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  Button{
    margin-top: 3rem;
    align-self: flex-end;
  }

  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    background-color: ${props => props.theme.background};
  }
`

const PriceRange = styled.div`
  display: flex;
  gap: 2rem;
`

const FilterPage  = () => {

  const cookies = new Cookies()
  const route = useRouter()
  const { register, handleSubmit }  = useForm()

  const [brands, setBrands] = useState(['Todos'])
  const [colors, setColors] = useState(['Todos'])
  const [years, setYears] = useState(['Todos'])

  const getFilters = () => {
    API.get('/vehicles/get_filters').then(({data}) => {
      setBrands([...brands, ...data.brand])
      setColors([...colors, ...data.color])
      setYears([...years, ...data.year])
    })
  }

  useEffect(getFilters,[])

  const SaveFilters = (data) => {
    const dataFilters = {
      brand: data.brand,
      color: data.color,
      year: data.year,
      price: {
        minPrice: data.minPrice,
        maxPrice: data.maxPrice
      }
    }
    cookies.set('InfoFilters', dataFilters )
    route.push('/')
  }

  return(
    <>
      <Link href='/'><img src="Arrow.png" width={'30px'} /></Link>
      <StyledFilter onSubmit={handleSubmit(SaveFilters)}>
        <SelectBox options={brands} label={'Marca'} {...register('brand')}/>
        <SelectBox options={colors} label={'Cor'} {...register('color')}/>
        <SelectBox options={years} label={'Ano'} {...register('year')}/>
        <GlobalStyle />
        <PriceRange>
          <Input color={'#fff'} width={'1.5rem'} border={'1px solid black'} label={'Preço mín::'} {...register('minPrice')}/>
          <Input color={'#fff'} width={'1.5rem'} border={'1px solid black'} label={'Preço máx:'} {...register('maxPrice')}/>
        </PriceRange>
        <Button width={'8rem'} type={'submit'}>SALVAR</Button>
      </StyledFilter>
    </>

  )
}

export default FilterPage