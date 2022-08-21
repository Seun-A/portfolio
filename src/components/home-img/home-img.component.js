import './home-img.style.scss'
import homeImg from '../../assets/pic.jpg'

const HomeImg = () => (
  <div className='home-img-container d-flex align-items-center'>
    <img src={homeImg} className='profile-img' alt='profile-img' />
  </div>
)

export default HomeImg;
