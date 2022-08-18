import './home.style.scss'
import profileImg from '../../assets/pic.jpg'



const HomePage = () => (
  <div className='page home-page container d-flex align-items-center'>
      <article className='col-7'>
        <h6>Hello I'm</h6>
        <h1>Seun Ajayi</h1>
        <h6>Junior Frontend Developer</h6>

        <h2>Skills</h2>
        {
          ['JavaScript', 'React', 'HTML', 'CSS', 'Bootstrap', 'Firebase', 'Redux'].map(skill => (
            <div className='skill'>{skill}</div>
          ))
        }
      </article>

      <div className='img-container'>
        <img src={profileImg} className='profile-img' alt='profile-img' />
      </div>
  </div>
)

export default HomePage; 
