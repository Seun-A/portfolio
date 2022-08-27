import './tech-display.style.scss'

import Pill from '../pill/pill.component';
import reduxImg from '../../assets/redux.png'
import firebaseImg from '../../assets/firebase.png'

const TechDisplay = () => {

  return (
    <div 
      id='tech-display'
      className='d-flex align-items-center align-content-center justify-content-cente mt-4 my-5' 
    >
      <span className='d-flex mx-auto'>

        {
          ['react', 'js', 'bootstrap', 'html5', 'css3'].map((skill, i) => ( // 
            <div className='mx-1'>
              <Pill icon={skill} key={i} />
              <div className='tech-label'>{skill.toUpperCase()}</div>
            </div>
          ))
        }
        {/* Imported Manually */}
        <div className='mx-1'>
          <Pill img={reduxImg} imgLabel='redux' />
          <div className='tech-label'>REDUX</div>
        </div>
        <div className='mx-1'>
        <Pill img={firebaseImg} imgLabel='firebase' />
          <div className='tech-label'>REDUX</div>
        </div>
      </span>

    </div>
  )
}

export default TechDisplay;
