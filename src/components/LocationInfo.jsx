

const LocationInfo = ({location}) => {

    
  return (
    <article className="location_art_name">
      <h2 className="sub_location">{location?.name}</h2>
    <ul>
        <li><span className="list_location">Type: </span>{location?.type}</li>
        <li><span className="list_location">Dimension: </span>{location?.dimension}</li>
        <li><span className="list_location">Population: </span>{location?.residents.length}</li>
        
    </ul>
    
    </article>
  )
}

export default LocationInfo