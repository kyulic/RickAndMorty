import { useRef } from "react"
import getRandomNumber from "../utils/getRandomNumber"


const FormSearch = ({setIdLocation}) => {
 const idLocationValue=useRef()
 const handleSumit=e=>{

    e.preventDefault()
    const inputValue=idLocationValue.current.value.trim()
    if(inputValue===''){
      setIdLocation(getRandomNumber(126)) 
    }else{setIdLocation(inputValue)}
    

 }

  return (
    <form className="form_location" onSubmit={handleSumit}>
        <input className="form_input" placeholder="Enter id location" 
        type="text"
        ref={idLocationValue}
        />
        <button className="button_form">Search</button>
    </form>
  )
}

export default FormSearch