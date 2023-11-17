import { DeleteOutline } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "../Slices/StoreSlice";

function CartItem({ item }) {
  const { title, id, image, price, quantity, totalPrice } = item;
  const dispatch = useDispatch();

  return (
    <div className="flex border-b border-gray-200 gap-x-4 py-2 lg:px-6 w-full font-light text-gray-500">
      <div className="w-full min-h[150px] flex items-center gap-x-4 ">
        <Link to={`/Product/${id}`}>
          <img src={image} alt="" className="max-w-[70px]" />
        </Link>
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <Link
              to={`/Product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-blue-950 hover:underline"
            >
              {title}
            </Link>
            <div
              className="text-xl cursor-pointer"
              onClick={() => dispatch(deleteFromCart(id))}
            >
              <DeleteOutline className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px] tex-sm">
            <div className="flex flex-1 mx-2-[100px] items-center h-full border text-blue-950 font-medium">
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() => dispatch(removeFromCart(id))}
              >
                <RemoveIcon />
              </div>

              <div className="h-full flex justify-center items-center px-2">
                {quantity}
              </div>
              <div
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
                onClick={() => dispatch(addToCart({ title, id, image, price }))}
              >
                <AddIcon />
              </div>
            </div>
            <div className="flex-1 flex justify-end items-center font-medium ">
              {price}
            </div>
            <div className="flex-1 flex justify-end items-center font-medim text-blue-950">
              {totalPrice}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
