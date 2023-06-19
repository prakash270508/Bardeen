import React, { useState } from "react";
import { auth, provider } from "../utils/config";
import GoogleButton from "react-google-button";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {FaGoogle} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleSignIn = async () => {
    const response = await signInWithPopup(auth, provider);

    console.log(response);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#6f60cc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h4 style={{color:"#6f60cc"}}><b>Welcome to Brdeen</b></h4>
                  <p className="text-secondary" style={{marginBottom:"50px"}}><b>Let's log into launch your automation</b></p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <div className="mb-3" style={{float:"left"}}>
                        <Link className="links" to={'/sign-up'}>Create Account</Link>
                    </div>
                    <div style={{float:"right", color:"#6f60cc"}}>
                        <p className="links" onClick={()=>alert("Work in progress")}> Forgot Password </p>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block w-100"
                    type="submit"
                  >
                    Login
                  </button>

                  <hr className="my-4" />
                  <GoogleButton type="light" className="w-100" onClick={handleGoogleSignIn} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
