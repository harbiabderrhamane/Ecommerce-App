import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slices/StoreSlice";
import ItemCards from "./ItemCards";
import Hero from "./Hero";

function Main() {
  const store = useSelector((state) => state.store.data);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const filterdItems = store.filter(
    (item) =>
      item.category === "men's clothing" || item.category === "women's clothing"
  );

  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filterdItems.map((item) => (
              <ItemCards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
