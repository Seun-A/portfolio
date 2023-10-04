import loader from '../../assets/loader.svg'
import './loader.style.scss'

const Loader = () => (
  <div id='loader' className='justify-content-center'>
    <img src={loader} alt='loader' />
  </div>
)

export default Loader;
