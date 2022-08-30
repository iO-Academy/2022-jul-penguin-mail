import './App.css';
import DisplayEmailContainer from "./DisplayEmailComponents/DisplayEmailContainer/DisplayEmailContainer";
import Header from './Header/Header.js'
import SideBar from './SideBar/SideBar.js'
import {useState} from "react"

function App() {
    const [sidebarIsHidden, setSidebarIsHidden] = useState(true)
    return (
    <div className="App">
        <Header setSidebarIsHidden={setSidebarIsHidden} />
        <div className={'d-flex flex-row vh-100'}>
            <SideBar sidebarIsHidden={sidebarIsHidden} />
            <DisplayEmailContainer />
        </div>
    </div>
  )
}
export default App;
