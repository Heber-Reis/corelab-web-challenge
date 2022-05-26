import styled from 'styled-components'
import Card from '../layout/Card'

const StyledAds = styled.div`
  margin-top: 1rem;
`
const AdsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: ${props => props.theme.brakepoints.laptopSize}){
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

const MyAds = (props) => {

  return(
    <StyledAds>
      <p>{props.NameSection}</p>
      <AdsContainer>
        {
          props.Ads.map((element, key) =>
            <Card
              key={key}
              title={element.title}
              price={element.price}
              description={element.description}
              year={element.year}
              color={element.color}
              showEditButton={(element.user === 'user1')}
              isFavorite={element.isFavorite}
              Favorite={() => {props.changeFavorites(element._id, element.isFavorite)}}
              Delete={() => props.Delete(element._id)}
              Edit={() => props.Edit(key)}
            />
          )
        }
      </AdsContainer>
    </StyledAds>
  )
}

export default MyAds