import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Slices/StoreSlice";

function ProductDetails() {
  const { id } = useParams();
  const data = useSelector((state) => state.store.data);
  const dispatch = useDispatch();
  const product = data.find((item) => item.id === parseInt(id));

  // const { title, price } = product;
  console.log(product);

  return (
    <section className="pt-32 pb-12 lg:pt-60 lg:pb-60 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-10">
          <div className="">
            <img
              src={product?.image}
              alt=""
              className="max-w-[200px] lg:max-w-sm"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {product?.title}
            </h1>
            <div className="text-red-500 font-medium text-xl mb-6">
              {product?.price}
            </div>
            <p className="mb-8">{product?.description}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-950 text-white py-4 px-8"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
