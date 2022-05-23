import styled, {createGlobalStyle} from 'styled-components'
import { useRouter } from 'next/router'
import Button from '../components/layout/Button'
import Input from '../components/layout/Input'
import SelectBox from '../components/layout/SelectBox'

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

const StyledFilter = styled.div`
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

  const route = useRouter()

  const SaveFilters = () => {
    route.push('/')
  }
  return(
    <>
      <Link href='/'><img src="Arrow.png" width={'30px'} /></Link>
      <StyledFilter>
        <SelectBox options={['opção 1', 'opção 2']} label={'marca'} />
        <SelectBox options={['opção 1', 'opção 2']} label={'marca'} />
        <SelectBox options={['opção 1', 'opção 2']} label={'marca'} />
        <GlobalStyle />
        <PriceRange>
          <Input color={'#fff'} width={'1.5rem'} border={'1px solid black'} label={'Preço mín::'} />
          <Input color={'#fff'} width={'1.5rem'} border={'1px solid black'} label={'Preço máx:'} />
        </PriceRange>
        <Button width={'8rem'} onClick={SaveFilters}>SALVAR</Button>
      </StyledFilter>
    </>

  )
}

export default FilterPage