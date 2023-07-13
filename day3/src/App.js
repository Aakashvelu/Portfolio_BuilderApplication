import logo from './logo.svg';
import LoginPage from './components/Login';
import RegistrationPage from './components/Register';
import Home from './components/Home';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Creation from './Hom/Creation';
import Dashboard from './Hom/Dashboard';
import About from './Hom/About';
import Navbar from './components/Navbar';


function App() {
  return (
    // <div className="App">
    //   <RegistrationPage/>
    //   <LoginPage/>
    // </div>
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/register" element={<RegistrationPage/>}></Route>

    </Routes>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/creation" element={<Creation/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      {/* <Route path="/nav" element={<Navbar/>}></Route> */}

    </Routes>
    </BrowserRouter>

    

  );
}

export default App;
