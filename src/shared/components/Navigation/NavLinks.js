import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../context/auth-context';
import './NavLinks.css';

const NavLinks = props => {
  const auth = useContext(AuthContext);

  const HandleLogout=()=>{
       const islogout=auth.logout
       if(islogout){
              swal({
                     title: "Sucess !!",
                     text: "User Registered Sucessfullyy!",
                     icon: "success",
                     button: "Close!",
                      });
       }
       else{
           swal({
                     title: "Oops!",
                     text: "Something went wrong!",
                     icon: "error",
                     button: "Try again!",
                   });
       }
        
  }
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
           USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink to="/places/new">ADD PLACE</NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink to="/auth">SIGNUP / SIGNIN </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          {/* <button  onClick={HandleLogout}>LOGOUT</button> */}

          <button  onClick={auth.logout} onChange={()=>{  swal({
                     title: "Sucess !!",
                     text: "User Registered Sucessfullyy!",
                     icon: "success",
                     button: "Close!",
                      });}}>LOGOUT</button>
       

        </li>
      )}
    </ul>
  );
};

export default NavLinks;
