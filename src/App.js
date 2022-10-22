
import './App.css';
import Home from './component/Home'
import Sighup from './component/Sighup'
// import Signin from './component/Signin'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
  {/* <Alert message={"this is alert"}/> */}
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<Sighup/>}/>
      {/* <Route exact path="/signin" element={<Signin/>}/> */}
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
