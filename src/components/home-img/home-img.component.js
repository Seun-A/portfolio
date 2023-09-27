import './home-img.style.scss'
import homeImg from '../../assets/pic.jpg'
import Image from 'next/image';

const HomeImg = () => (
  <div className='home-img-container d-flex align-items-center'>
    <Image src={homeImg} className='profile-img' alt='profile-img' />
  </div>
)

export default HomeImg;
