import './home.style.scss'
import HomeImg from '../../components/home-img/home-img.component';
import { Link } from 'react-router-dom';

import logo from '../../assets/redux.svg'
import fire from '../../assets/firebase.png'

const HomePage = () => (
  <div className='page home-page d-flex'> 
    <section className='base-container container-fluid d-flex '> 
      <div className='row d-flex flex-row-reverse'>
        <div className='col-12 p-0 col-lg-5'>
          <HomeImg />
        </div>
        
        <div className='col intro d-flex flex-column justify-content-center'>
          <h6>Hello I'm</h6>
          <h1>Seun Ajayi</h1>
          <h6>Junior Frontend Developer</h6>

          <div className='home-btns'>
            <button className='home-btn'><Link to='/projects'>Projects</Link></button>
            <button className='home-btn'><Link to='/contact'>Contact</Link></button>
          </div>
        </div>

        <div className='skills col-12 text-center d-flex flex-wrap justify-content-center'>
          {
            ['react', 'js', 'bootstrap', 'html5', 'css3'].map((skill, i) => (
              <span className='skill d-flex justify-content-center align-items-center' key={i}><i className={`fa-brands fa-${skill}`} /></span>
            ))
          }

          <span className='skill d-flex justify-content-center align-items-center'><img src={logo} className='' alt='redux' /></span>
          <span className='skill d-flex justify-content-center align-items-center'><img src={fire} className='' alt='redux' /></span>
        </div>
      </div>
    </section>
  </div>
)

export default HomePage;
