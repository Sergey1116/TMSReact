import React, {useState, useRef} from 'react';
import {useHistory} from "react-router-dom";
import { signIn} from '../../helpers/authenticationHelpers';

const LogIn = () =>{

    const [valid, setValid] = useState({name: true, password: true, form: true});
    let history = useHistory();
    const inputName = useRef("");
    const inputPassword = useRef("");

    const handlerFormOnClick = (e) =>{
        e.preventDefault();
        if(inputName.current.value === "" || inputPassword.current.value === ""){
            setValid({name: inputName.current.value? true : false, password: inputPassword.current.value? true : false, form: true});
        } else{
            if (signIn(inputName.current.value, inputPassword.current.value)){
                history.push("/CostAccounting");
            } else{
                setValid({name: true, password: true});
            }
        }
    }

    return(
        <div className="d-flex justify-content-center mt-5">
            <div className="w-50">
                <h3 className="mb-3">Please sign in</h3>
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" ref={inputName} className={`form-control ${valid.name?"":"is-invalid"}`} placeholder="Login"/>
                        <div className="invalid-feedback">Name is a required field!</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" ref={inputPassword} className={`form-control ${valid.password?"":"is-invalid"}`} placeholder="Password"/>

                        <div className="invalid-feedback">Password is a required field!</div>
                    </div>
                    {valid.form? "": <div className="text-danger pb-3">There was a problem. We cannot find an account with that password!</div>}
                    <button type="submit" className="btn btn-primary" onClick={handlerFormOnClick}>Submit</button>

                </form>
            </div>
        </div>
    );
}

export default LogIn;