import { Link } from 'react-router-dom';
import './home-btn.style.css'

const HomeBtn = ({ to, label }) => {
  const btnStyle = {
    background: "#243E1488",
    boxShadow: "0px 3px 3px 0px #243E1488",
    border: "2px solid white",
    borderRadius: "30px",

    marginRight: "10px",
    padding: "10px 30px",
    fonSize: "1.1rem",

    transition: "all 0.15s",
    color: "white",
    fontWeight: "500"
  }
  
  
  return (
  <Link to={to}>
    <button style={btnStyle} className='home-btn'>{label}</button>
  </Link>
)}

export default HomeBtn;
