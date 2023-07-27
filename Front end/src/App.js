import LoginPage from './components/Login';
import RegistrationPage from './components/Register';
import Home from './components/Home';
import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Creation from './Hom/Creation';
import Dashboard from './Hom/Dashboard';
import About from './Hom/About';
import Navbar from './components/Navbar';
import Profile from './Hom/Profile';
import TemplatePage from './Hom/Template';
import Add  from './components/Add';
import Page from './components/Get';
import Tdelete from './components/delete';
import Dash from './components/edit';
import Feedback from './components/Feed';
// import DetailsList from './components/Ctemp';

function App() {
  return (   
<>
    
      <Routes>
      <Route exact path="/" element={<LoginPage/>}></Route>
      <Route exact path="/register" element={<RegistrationPage/>}></Route>
      <Route exact path="/home" element={<Home/>}></Route>
      <Route exact path="/creation" element={<Creation/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>
      <Route path="/profile" element={<Profile/>}></Route>
      <Route path="/temp" element={<TemplatePage/>}></Route>
      <Route path="/details" element={<Add/>}></Route>
      <Route path="/page" element={<Page/>}></Route>
      <Route path="/delete" element={<Tdelete/>}></Route>
      <Route path="/edit" element={<Dash/>}></Route>
      <Route path="/feed" element={<Feedback/>}></Route>



    </Routes>


    
    </>
  );
}

export default App;
