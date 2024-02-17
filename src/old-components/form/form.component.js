import './form.style.css'
import FormInput from '../form-input/form-input.component'
import { useState } from 'react'

const Form = ({ handleChange, onSubmit, state }) => {
  const formStyle = { marginTop: "2rem" }
  
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  const btnStyle = { 
    background: isHovering ? "#518b2d99" : "white",
    border: "1px solid white",
    borderRadius: "10px",

    color: isHovering ? "white" : "#243E14",
    fontSize: "1rem",
    fontWeight: "600",

    padding: "10px",
    position: "relative",
    boxShadow: "0 4px 0 0 #3f6c23",
    
    transition: "all  0.2s",
  }
  


  return (
    <form 
      onSubmit={onSubmit} 
      className='container-fluid w-75'
      style={formStyle}
    >
      <div className='row'>{
        ['name', 'email', 'subject', 'message'].map((e, i) => {
          const inputs = e === 'name' || e === 'email' ? (
            <div className='col-12 col-md-6' key={i}>
              <FormInput 
                name = {e}
                type = { e === 'name' ? 'text' : 'email' }
                label = {e.charAt(0).toUpperCase() + e.slice(1)}
                autoComplete = {e}
                value = {state[e]}
                handleChange = {handleChange}
                required
              />
            </div>
          ) : ( 
            <div className='col-12' key={i}>
              <FormInput 
                isMessage= { e === 'message' ? true : false }
                name = {e}
                type = 'text'
                label = {e.charAt(0).toUpperCase() + e.slice(1)}
                autoComplete = {e}
                value = {state[e]}
                handleChange = {handleChange}
                required
              />
            </div>
          )
          return inputs
        })
      }</div>

      <button 
        className='col-12 mb-5' 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={btnStyle}
      >
        Send Message
      </button>
    </form>
  )
}

export default Form; 
