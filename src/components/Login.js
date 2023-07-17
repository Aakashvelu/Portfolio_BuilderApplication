
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import './Login.css';
// import {login} from '../Features/user';
// import { useDispatch } from "react-redux";

// const LoginPage = ({ login, error }) => {
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const dispatch=useDispatch();
//   const navigate = useNavigate();
  
//   const [pame,setPame]=useState('');
//   const handleChange = (e) => {
//     // 👇 Store the input value to local state
//     setPame(e.target.value);
//   };
//   const handleSubmit = (e) => {

//     // e.preventDefault();
//     // login(name, password);
//     console.log(pame);
   
//     // navigate("/home")
//   };

//   return (
//     <div className='lo'>
//       {/* <store/> */}
//       <div className='log'>

//       {/* {error && <p>{error}</p>} {} */}
//       <form >
//       <h2>Login</h2>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             value={pame}
//             onChange={(e) => setPame(e.target.value)}
//             />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             />
//         </div>
//         {/* <NavLink to="/Home">

//          <button type="submit" onClick={()=>  dispatch(login(
//       {name: pame}
//     ))}>Login</button>
//          </NavLink> */}
//          <NavLink to='/home'><button type="submit" className="btn" onClick={()=> dispatch(login(
//         {name: pame}
//       ))}>Submit</button>
//         </NavLink>
//       <br/>
//        Don't have an account? 
//        <NavLink to="/register">Sign up</NavLink>
//       </form>
//             </div>
//     </div>
//   );
// };



// export default LoginPage;


import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from '../Features/user';
import { NavLink } from "react-router-dom";

export default function LoginPage() {
  const [state, setState] = useState(false);
  const [pame,setPame]=useState('');

  const RegisterForm = (
    <form id="Regform">
      <input type="text" placeholder="username" />
      <input type="E-mail" placeholder="Email" />
      <input type="password" placeholder="password" />
      <button type="submit" className="btn">
        Register
      </button>
    </form>
  );
  const handleChange = (e) => {
    // 👇 Store the input value to local state
    setPame(e.target.value);
  };

  const LoginForm = (
    <form id="loginform">
      <input type="text" placeholder="username" value={pame} onChange={handleChange}/>
      <input type="password" placeholder="password" />
      <Link to='/home'><button type="submit" className="btn" onClick={()=> dispatch(login(
        {name: pame}
      ))}>
        Login
      </button></Link>
      Don't have an account? <NavLink to="/register">Sign up</NavLink>
      
      <a href="/#">Forgot password</a>
    </form>
  );

  function change(a){
    const b1=document.getElementById("login");
    const b2=document.getElementById("sign");
    if(a){
      b2.style.backgroundColor='#ffffffc3';
      b1.style.backgroundColor='rgb(249, 211, 226)';
    }else{
      b1.style.backgroundColor='#ffffffc3';
      b2.style.backgroundColor='rgb(249, 211, 226)';
    }
  }
const dispatch=useDispatch();


  return (
    <div className="log1">
      <div className="acc-page">
        <div className="form-container">
          <div className="form-btn">
            <div className="re-conti">
              {/* <div className="re-login" id="login" onClick={() => {setState(false);change(true);}}>Login</div> */}
              {/* <div className="re-sign" id="sign" onClick={() => {setState(true);change(false)}}>Register</div> */}
            </div>
            
            <hr id="indicator" />
            {state ? RegisterForm : LoginForm}
          </div>
        </div>
      </div>
    </div>
  );
}
