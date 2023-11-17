import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Slices/UserSlice";

import { ShoppingBagOutlined } from "@mui/icons-material";
import { LogoutOutlined } from "@mui/icons-material";
import { open } from "../Slices/StoreSlice";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const sidebar = useSelector((state) => state.store.isOpen);
  const quantity = useSelector((state) => state.store.totalQuantity);
  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md py-4" : "bg-amber-50 py-6"
      }  z-10 transition-all fixed w-full`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <img src={Logo} alt="" className="w-[40px]" />
        </Link>
        <div
          className=" flex relative gap-x-4 items-center justify-center"
          onClick={() => dispatch(open(!sidebar))}
        >
          <ShoppingBagOutlined className="text-2xl cursor-pointer" />
          <div className="bg-red-500 absolute right-7 bottom-3 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {quantity}
          </div>
          <button
            onClick={() => dispatch(logout())}
            className=" cursor-pointer"
          >
            <LogoutOutlined />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
