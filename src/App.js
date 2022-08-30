import './App.css';
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'

function App() {
  return (
    <div className="App">
        <Header />
        <div className={'d-flex flex-row vh-100'}>
            <SideBar />
            <DisplayEmailContainer />
        </div>
    </div>
  )
}
export default App;
