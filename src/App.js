import './App.scss';

const circles = []
for (let x = 1; x <= 10; x++) {
  circles.push(<div className={`circle c-${x}`} key={x} />)
}
console.log(circles)

function App() {
  return (
    <div className="App d-flex w-100">
      <section className='base-container'>
        {/* Content Goes Here */}
      </section>

      {/* Animated Circles */}
      { circles.map(circle => circle) }
    </div>
  );
}

export default App;
