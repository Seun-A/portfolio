import FormInput from '../form-input/form-input.component'

const Form = ({ handleChange, onSubmit, state }) => (
  <form onSubmit={onSubmit} className='container-fluid w-75'>
    <div className='row'>
      {
        ['name', 'email', 'subject', 'message'].map((e, i) => {
          const toRender = e === 'name' || e === 'email' ? 
            (
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
            ) 
            : 
            (
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
          return toRender
        })
      }
    </div>

    <button className='col-12'>Send Message</button>
  </form>
)

export default Form; 
