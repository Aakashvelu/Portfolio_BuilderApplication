import LoginPage from './components/Login';
import RegistrationPage from './components/Register';
import Home from './components/Home';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Creation from './Hom/Creation';
import Dashboard from './Hom/Dashboard';
import About from './Hom/About';
import Navbar from './components/Navbar';
import MaybeShowNavbar from './components/Maybe';

function App() {
  return (   
    <BrowserRouter>
    {/* <MaybeShowNavbar> */}
    <Navbar/>
    {/* </MaybeShowNavbar> */}
    <Routes>
      <Route exact path="/" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegistrationPage/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/creation" element={<Creation/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      {/* <Route path="/nav" element={<Navbar/>}></Route> */}

    </Routes>
    </BrowserRouter>

    

  );
}

export default App;
