import './alert.style.scss'; 

export default function Alert() {
  
  const handleClick = () => {
    const alert = document.getElementById('alert');
    alert.style.display = 'none'
  }

  return (
    <div id='alert' className='container-fluid'>
      <div className='alert-container col-9 d-flex flex-column align-items-center'>
        <button id='close-alert' className='' onClick={handleClick}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className='icon-container mb-4'>
         <i className="fa-solid fa-check"></i>
        </div>
        <div className='alert-message'>
          Sent !
        </div>
      </div>
    </div>
  )
}