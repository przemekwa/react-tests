
import {useState} from 'react';
import './App.css';
import Navbar from './navbar';

function App() {

  const name = "Przemek";
  const [date, setDate] = useState(new Date());


  setInterval(() => {
    setDate(new Date());
  }, 1000);

  const formatTime = (number) => ('00' + number).slice(-2);


  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <div className="content">Witaj {name}

          <h1>
            {date.getFullYear()}
            :{formatTime(date.getMonth() + 1)}
            :{formatTime(date.getDate())}
            :{formatTime(date.getHours())}
            :{formatTime(date.getMinutes())}
            :{formatTime(date.getSeconds())}
          </h1>

        </div>


      </header>
    </div>
  );
}

export default App;
