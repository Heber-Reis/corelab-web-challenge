import styled from 'styled-components'
import { useState, useEffect } from 'react'

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
              showEditButton={props.showEditButton}
              isFavorite={props.isFavorite}
              Favorite={(isFavorite) => {props.changeFavorites(key, isFavorite)}}
              Delete={() => props.Delete(key)}
              Edit={() => props.Edit(key)}
            />
          )
        }
      </AdsContainer>
    </StyledAds>
  )
}

export default MyAds