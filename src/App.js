import './App.css';
import SideBar from './SideBar'
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'

function App() {
  return (
    <div className="App">
      <SideBar />
      <DisplayEmailContainer />
      <Header />

    </div>
  );
}

export default App;
