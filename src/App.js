import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup />}/>

          <Route element={<ProtectedRoutes /> } >
            <Route path="/*" element={<Home />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
