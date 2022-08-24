import './home.style.scss'
import HomeImg from '../../components/home-img/home-img.component';

import reduxImg from '../../assets/redux.svg'
import firebaseImg from '../../assets/firebase.png'

import HomeBtn from '../../components/home-btn/home-btn.component';
import Pill from '../../components/pill/pill.component'

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
            <HomeBtn to='/projects' label='Projects' />
            <HomeBtn to='/contact' label='Contact' />
          </div>
        </div>

        <div className='skills col-12 text-center d-flex flex-wrap justify-content-center'>
          {
            ['react', 'js', 'bootstrap', 'html5', 'css3'].map((skill, i) => (
              <Pill icon={skill} key={i} />
            ))
          }

          {/* Imported Manually */}
          <Pill img={reduxImg} imgLabel='redux' />
          <Pill img={firebaseImg} imgLabel='firebase' />
        </div>
      </div>
    </section>
  </div>
)

export default HomePage;
