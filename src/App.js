
import {useState} from 'react';
import './App.css';
import Navbar from './navbar';

function App() {

  const name = "Przemek";
  const [date, setDate] = useState(new Date());
  const [stardate, setStardate] = useState(null);
  
  const [isStopWatch, setIsStopWatch] = useState(false);


  setInterval(() => {
    setDate(new Date());

    if (isStopWatch) {
      setStardate(new Date());

    }
    else{
      setStardate(null);
    }




  }, 1000);

  const formatTime = (number) => ('00' + number).slice(-2);
  
  
  const startWatch = () => {
    setIsStopWatch(!isStopWatch);
  }


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
          <button onClick={() => startWatch()} >Start</button>

          {stardate &&

            <h1>
              {stardate.getFullYear()}
              :{formatTime(stardate.getMonth() + 1)}
              :{formatTime(stardate.getDate())}
              :{formatTime(stardate.getHours())}
              :{formatTime(stardate.getMinutes())}
              :{formatTime(stardate.getSeconds())}
            </h1>
          }



        </div>


      </header>
    </div>
  );
}

export default App;
