import { Outlet } from 'react-router-dom';
import './App.scss';
import Hamburger from './components/hamburger/hamburger.component';

const circles = []
for (let x = 1; x <= 10; x++) {
  circles.push(<div className={`circle c-${x}`} key={x} />)
}

function App() {
  return (
    <div className="App d-flex w-100">
      <section className='base-container'>
        {/* Content Goes Here */}
        <Hamburger />
        <Outlet />
      </section>

      {/* Animated Circles */}
      { circles.map(circle => circle) }
    </div>
  );
}

export default App;
