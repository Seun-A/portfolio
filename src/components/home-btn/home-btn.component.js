import { Link } from 'react-router-dom';
import './home-btn.style.scss'

const HomeBtn = ({ to, label }) => (
  <button className='home-btn'>
    <Link to={to}> {label}</Link>
  </button>
)

export default HomeBtn;
