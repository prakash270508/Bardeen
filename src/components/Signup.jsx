import React, { useEffect, useState } from "react";
import { auth, provider } from "../utils/config";
import GoogleButton from "react-google-button";
import { signInWithPopup, createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";

import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      toast.success("Logged in")
      localStorage.setItem("token", response.user.accessToken)
      navigate('/')

      
    } catch (error) {
      toast.error(error.message);
      localStorage.removeItem('token')
    }

  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log(response);

      toast.success("Signup successfull");
      localStorage.setItem("token", response.user.accessToken);
      navigate('/')
    } catch (error) {
      toast.error(error.message);
      localStorage.removeItem('token')
    }
  };

  useEffect(()=>{
    if(localStorage.getItem('token')){
      navigate('/')
    }
  },[])

  return (
    <section className="vh-100" style={{ backgroundColor: "#6f60cc" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <h4 className="mb-5" style={{ color: "#6f60cc" }}>
                  <b>Signup to Brdeen</b>
                </h4>

                <form onSubmit={handleSignup}>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      value={email}
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      value={password}
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div>
                    <div className="mb-3" style={{ float: "left" }}>
                      <span>
                        <b>Already have account</b>
                      </span>
                      <Link className="links mx-2" to={"/"}>
                        Login
                      </Link>
                    </div>
                  </div>

                  <button
                    className="btn btn-primary btn-lg btn-block w-100"
                    type="submit"
                    onClick={handleSignup}
                  >
                    Sign up
                  </button>
                </form>

                <hr className="my-4" />
                <GoogleButton
                  type="light"
                  className="w-100"
                  onClick={handleGoogleSignIn}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
