import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "store/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);
const initialState = {
  data: [],
  status: null,
  cart: [],

  totalQuantity: 0,
  isOpen: false,
};

const StorerSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = action.payload;
    },
    addToCart: (state, action) => {
      console.log(action.payload);
      const newItem = action.payload;
      const existingItems = state.cart.find((item) => item.id === newItem.id);
      if (existingItems) {
        existingItems.quantity++;
        existingItems.totalPrice += Math.floor(newItem.price);
      } else {
        state.cart.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
          image: newItem.image,
          description: newItem.description,
        });
        state.totalQuantity++;
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItems = state.cart.find((item) => item.id === id);
      if (existingItems.quantity === 1) {
        state.cart = state.cart.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItems.quantity--;
        existingItems.totalPrice -= existingItems.price;
      }
    },
    deleteFromCart: (state, action) => {
      const id = action.payload;
      state.cart = state.cart.filter((item) => item.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = "success";
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = "failed";
    });
  },
});
export const { open, addToCart, removeFromCart, deleteFromCart } =
  StorerSlice.actions;
export default StorerSlice;
