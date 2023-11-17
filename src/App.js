import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import ProductDetails from "./Pages/ProductDetails";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Slices/UserSlice";
import SignUP from "./Components/SignUP";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);

  return (
    <BrowserRouter>
      {!user ? (
        <SignUP />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Product/:id" element={<ProductDetails />} />
          </Routes>
          <SideBar />
        </>
      )}

      <Footer />
    </BrowserRouter>
  );
}

export default App;
