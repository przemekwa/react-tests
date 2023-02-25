
import moment from 'moment/moment';
import {useState} from 'react';
import './App.css';
import Navbar from './navbar';

function App() {

  const name = "Przemek";
  const [date, setDate] = useState(new Date());
  const [stardate, setStardate] = useState(null);
  
  const [isStopWatch, setIsStopWatch] = useState(false);

  let startWatchDate = null;


  setInterval(() => {
    setDate(new Date());

    if (isStopWatch) {
     
      console.log(moment(startWatchDate).add(1, 'seconds').format("HH:mm:ss"));

    }
  



  }, 1000);

  const formatTime = (number) => ('00' + number).slice(-2);
  
  
  const startWatch = () => {
    setIsStopWatch(!isStopWatch);
    startWatchDate = moment(new Date('December 17, 1995 00:00:00'));
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
