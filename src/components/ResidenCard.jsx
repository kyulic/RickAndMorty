import { useEffect } from "react"
import useFetch from "../hooks/useFetch"


const ResidenCard = ({url}) => {

const [resident,getApiResident]= useFetch(url)
useEffect(()=>{
    getApiResident()
},[])
console.log(resident)
  return (

    
    <article className="resident">
        
        <header className="resident_header">
            <img className="resident_img" src={resident?.image} alt="" />
            <div className="resident_status">
                <span className={`resident_circle ${resident?.status}`}></span>
                <span className="resident_status_value">{resident?.status}</span>
            </div>


        </header>
        <section className="section_resident">
            <h3 className="resident_name">{resident?.name}</h3>
            <div className="line"></div>
            <ul className="list_resident">
                <li className="list_resident_li"><span className="list_resident_spef">Specie: </span><span className="list_espe">{resident?.species}</span></li>
                <li className="list_resident_li"><span className="list_resident_spef">Origin: </span><span className="list_espe">{resident?.origin.name}</span></li>
                {/* en cuantos episodios salio se pone un length */}
                <li className="list_resident_li"><span className="list_resident_spef">Eppisodes where appear: </span><span className="list_espe">{resident?.episode.length}</span></li>
            </ul>
            
            
            
        </section>

        

    </article>
  )
}

export default ResidenCard