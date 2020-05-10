import React from "react";
import { Link, useHistory } from "react-router-dom";
import {isAuthenticated, signOut} from "../../helpers/authenticationHelpers";

const AuthenticationLink = () =>{
    let history = useHistory();

    const handlerLogOut = ()=>{
        signOut();
        history.push("/");
    }

    if(isAuthenticated()){
        return (
        <button className="btn btn-outline-primary float-right" onClick={handlerLogOut}>LogOut</button>
      )
    }
    return (
      <Link className="btn btn-outline-primary float-right" to="/LogIn">LogIn</Link>
    )
}

export default AuthenticationLink;