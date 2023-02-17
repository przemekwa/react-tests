
import './App.css';
import Navbar from './navbar';

function App() {

  const name = "Przemek";
  const date = new Date();






  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <div class="content">Witaj {name}

          <h1>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</h1>

        </div>


      </header>
    </div>
  );
}

export default App;
