import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { open } from "../Slices/StoreSlice";
import CartItem from "./CartItem";

function SideBar() {
  const sidebar = useSelector((state) => state.store.isOpen);
  const cart = useSelector((state) => state.store.cart);

  const dispatch = useDispatch();

  let total = 0;
  cart.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <div
      className={`${
        sidebar ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[50vh] xl:w-[70vh] transition-all duration-500 z-30 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b">
        <h3>Shoping Cart</h3>
        <div
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
          onClick={() => dispatch(open(!sidebar))}
        >
          <ArrowForwardOutlinedIcon className="text-4xl" />
        </div>
      </div>
      <div>
        {cart?.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className=" flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>
          </div>
          <div className=" flex justify-center items-center text-xl text-red-800 font-bold">
            <span>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
