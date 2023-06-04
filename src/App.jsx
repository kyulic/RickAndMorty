
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidenCard from './components/ResidenCard'
import FormSearch from './components/FormSearch'
import './components/styles/residentCard.css'

function App() {
  const randomId=getRandomNumber(126)
  const [idLocation, setIdLocation] = useState(randomId)
  // se llama la función random y se le agrega el parametro
  
  //metemos la función random en la url
 const url=`https://rickandmortyapi.com/api/location/${idLocation}`
// para desestruturar el erreglo, se usa arreglo porque se puede renombrar
const [location, getApiLocation, hasError]=useFetch(url)

useEffect(()=>{
  getApiLocation()
},[idLocation])

// console.log(location)

  return (
    <div className='app'>
      <div className='title_img'><img className="img_title" src="https://cdn.shopify.com/s/files/1/1286/1203/files/R_M_collab_banner_desktop.jpg?v=1623834292" alt="rick and morty" /></div>
      
      <h1 className='title_h1'>Rick And Morty App</h1>
      <FormSearch setIdLocation={setIdLocation}/>
      {
        hasError
        ? <h2>✖️💥Hey! you must provide an id from 1 to 126 </h2>
        :(
          <>
          <LocationInfo
      location={location}
      />
      <div className='resident-container'>
        
        {
          location?.residents.map(url=>(
            <ResidenCard
            url={url}
            key={url}
            />
          ))
        }

        


      </div>
        
        
        </>
        )
      }
      <dir className='repositorio'>Karla Yulieth Caquimbo U: <a className='link_repositorio'  href="https://github.com/kyulic/RickAndMorty">Repositorio</a></dir>
    </div>
    
  )
}

export default App
