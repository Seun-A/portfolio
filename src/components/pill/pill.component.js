import Image from 'next/image';
import './pill.style.scss'

const Pill = ({ icon, img, imgLabel }) => (
  <div className='tooltipper'>
    <span className='pill d-flex justify-content-center align-items-center'>
      {
        icon ? (
          <i className={`fa-brands fa-${icon}`} />
        ) : img ? (
          <Image src={img} alt={img} />
        ) : null
      }
    </span>

    <span className="tooltiptext">      
      { icon ? icon : img ? imgLabel : null }
    </span>
  </div>
)

export default Pill;
