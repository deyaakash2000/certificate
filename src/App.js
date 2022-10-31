
import './App.css';
import Home from './component/Home'
import Sighup from './component/Sighup'
// import Signin from './component/Signin'
import NoteState from './contex/userdetails/NoteState';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <>
    <NoteState>
    <BrowserRouter>
    <Routes>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/" element={<Sighup/>}/>
      {/* <Route exact path="/signin" element={<Signin/>}/> */}
    </Routes>
  </BrowserRouter>
  </NoteState>
  </>
    </div>
  );
}

export default App;
