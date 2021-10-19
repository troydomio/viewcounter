import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const[count, setCount] = useState([])

  // const fetch = () => {
  //   fetch('https://damp-brook-81947.herokuapp.com/count')
  //   .then(response => response.json())
  // .then(data => console.log(data));
  // }
  useEffect(() => {
    fetch("/count")
      .then((r) => r.json())
      .then(setCount);
  }, []);

  // console.log(count.view)
  
  return (

    <div className="App">
     <h1>This page was viewed {count.view} times!</h1>
    </div>
  );
}

export default App;
