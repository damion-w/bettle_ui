import React from "react";
import { Link } from "react-router-dom";
// import Auth from '../modules/Auth'

const Navigation = () => {

    // function logout() {
    //     console.log("LOGOUT!")
    //     Auth.deauthenticateUser();
    // }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Logout</Link>
        </li>

        
      </ul>
    </nav>
  );
}

export default Navigation