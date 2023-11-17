import React from "react";
import { Link } from "react-router-dom";
import { RemoveRedEye } from "@mui/icons-material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slices/StoreSlice";

function ItemCards({ item }) {
  const { title, id, image, category, price, description } = item;

  const dispatch = useDispatch();
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] overflow-hidden mb-4 transition group relative">
        <div className="w-full h-full justify-center items-center flex cursor-pointer">
          <div className="w-[200px] mx-auto flex justify-center items-center ">
            <img
              src={image}
              alt={title}
              className="max-h-[160px] group-hover:scale-110 transition duration-400"
            />
          </div>
          <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex justify-center flex-col items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <button
              onClick={() =>
                dispatch(
                  addToCart({ title, id, image, category, price, description })
                )
              }
            >
              <div className="justify-center items-center flex text-white h-8 w-8 bg-red-500">
                <AddOutlinedIcon className="text-3xl" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="w-8 h8 justify-center items-center flex bg-white text-blue-950 drop-shadow-xl"
            >
              <RemoveRedEye className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category} </div>
        <Link to={`/products/${id}`}>
          <h2 className="font-smibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
}

export default ItemCards;
