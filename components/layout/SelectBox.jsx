import styled from 'styled-components'

const SelectContainer = styled.div`
  label {
    margin-left: 1rem;
  }
`

const SelectContent = styled.div`
  position: relative;


`
const Img = styled.img`

  position: absolute;
  right: 1rem;
  top: 1rem;
  
`


const Select = styled.select`
  width: 100%;
  outline: none;
  background-color: #fff;
  font-size: 1rem;
  border-radius: 100px;
  height: 2.5rem;
  padding: 10px 20px;
  width: 100%;
  -webkit-appearance: none;
`

const SelectBox = (props) => {
  return(
    <SelectContainer>
      <label>{props.label}:</label>
      <SelectContent>
        <Select>
          {
            props.options.map((element, key) =>
              <option key={key}>{element}</option>
            )
          }
        </Select>
        <Img src={'/Line.png'} width={'25px'} />
      </SelectContent>
    </SelectContainer>
  )
}

export default SelectBox