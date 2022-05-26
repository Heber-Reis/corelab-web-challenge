import { useRouter } from 'next/router'

import VehicleForm from "../components/VehicleForm/VehicleFormComponent";
import API from  '../services/api'

const New = () => {

  const route = useRouter()

  const NewVehicle = (data) => {

    const ObjectRequest = {
      ...data,
      user: 'user1',
      isFavorite: false
    }
    
    API.post('/vehicles/new',ObjectRequest).then((res) =>{
        if(res.status === 201) {
          alert('Veículo cadastrado com sucesso!')
        }
        route.push('/')
      }
    )
  }

  return(
    <VehicleForm handleSubmit={NewVehicle}/>
  )
}

export default New