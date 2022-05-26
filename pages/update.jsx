import Cookies from "universal-cookie";
import { useRouter } from 'next/router'

import VehicleForm from "../components/VehicleForm/VehicleFormComponent";
import API from '../services/api'

const Update = () => {

  const cookies = new Cookies()
  const route = useRouter()

  const UpdateVehicle = (data) => {

    const SelectedVehicle = cookies.get('selected_vehicle')
    const ObjectRequest = {
      _id: SelectedVehicle._id,
      newData: {
        ...data,
        user: SelectedVehicle.user,
        isFavorite: SelectedVehicle.isFavorite
      }
    }
    
    API.post('/vehicles/update',ObjectRequest).then((res) =>{
        if(res.status === 200) {
          alert('Veículo atualizado com sucesso')
        }
        route.push('/')
      }
    )
  }

  return(
    <VehicleForm handleSubmit={UpdateVehicle}/>
  )
}

export default Update