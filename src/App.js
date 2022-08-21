import { Outlet } from 'react-router-dom';
import './App.scss';
import Header from './components/header/header.component';

const circles = []
for (let x = 1; x <= 10; x++) {
  circles.push(<div className={`circle c-${x}`} key={x} />)
}

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />

      {/* Animated Circles */}
      { circles.map(circle => circle) }
    </div>
  );
}

export default App;
