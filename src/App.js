import './App.css';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
          <DashBoard></DashBoard>
      </header>
    </div>
  );
}

export default App;
