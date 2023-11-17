import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Utils/firebase";
import { login, setSign } from "../Slices/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { doc, setDoc } from "firebase/firestore";

function SignUP() {
  const signing = useSelector((state) => state.user.sign);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
          })
        );
        console.log(userAuth);
        navigate("/");
        setDoc(doc(db, "items", email), {
          savedItems: {},
        });
      })
      .then((error) => alert(error));
  };

  return (
    <>
      {!signing ? (
        <div className="w-full h-screen">
          {/* <div className="bg-white fixed top-0 left-0 w-full h-screen"></div> */}
          <div className=" w-full px-4 py-24 z-50">
            <div className="max-w-[450px] h-[600px] mx-auto bg-black text-white">
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className="text-3xl font-bold">Sign Up</h1>
                <form onSubmit={signup} className="w-full flex flex-col py-4">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rouded"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 my-2 bg-gray-700 rouded"
                    type="password"
                    placeholder="Password"
                    autoComplete="current-password"
                  />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">
                    Sign Up
                  </button>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <p>
                      <input className="mr-2" type="checkbox" />
                      Remember me
                    </p>
                    <p>Need Help?</p>
                  </div>
                  <p className="py-8">
                    <span
                      onClick={() => dispatch(setSign(!signing))}
                      className="text-white cursor-pointer"
                    >
                      Already have an Account ? Sign In
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}

export default SignUP;
