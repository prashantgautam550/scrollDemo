import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([])


  const fetchData = () => {
    if (data.length) return
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(res => res.json())
      .then(({ results }) => {
        if (results) {
          setData(results)
        }
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div className='side-blk left-blk'>
        {
          data.map(({ name: pname, url },i) => {
            return <div className={`series-blk sw`} id={`l_${pname+i}`}>
              <div> <b>Name:</b>{pname}</div>
              <div><button onClick={() => window.location.hash = `#r_${pname+i}`}>view detail</button></div>
            </div>
          })
        }
      </div>
      <div className='side-blk right-blk'>
        {
          data.map(({ name: pname, url },i) => {
            return <div className={`series-blk sh`} id={`r_${pname+i}`}>
              <div> <b>Name:</b>{pname}</div>
              <div><button onClick={() => window.location.hash = `#l_${pname+i}`}>view detail</button></div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
