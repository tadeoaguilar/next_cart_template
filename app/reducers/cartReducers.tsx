import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderDetail } from "../lib/databaseStructure";

type cartItemsState = OrderDetail;
//const initialState: cartItemsState[] = [{productId:"1",quantity:1,name:"test Redux",price:1.1 },{productId:"1",quantity:1,name:"test Redux2",price:1.1 }]
const initialState: cartItemsState[] =
  typeof window !== "undefined" && window.localStorage.getItem("cartItems")
    ? JSON.parse(window.localStorage.getItem("cartItems") || "{}")
    : [];

export const userCartSlice = createSlice({
  name: "cartReducer",
  initialState,
  reducers: {
    cartAddItem: (
      state: cartItemsState[],
      action: PayloadAction<cartItemsState>,
    ) => {
      const item = action.payload;
      const existItem = state.find((x) => x.productId === item.productId);

      if (existItem) {
        const newState = [
          ...state.map((x) =>
            x.productId === item.productId
              ? { ...x, quantity: x.quantity + item.quantity }
              : x,
          ),
        ];
        typeof window !== "undefined" &&
          window.localStorage.setItem("cartItems", JSON.stringify(newState));

        return newState;
      } else {
        typeof window !== "undefined" &&
          window.localStorage.setItem(
            "cartItems",
            JSON.stringify([...state, { ...item }]),
          );
        return [...state, { ...item }];
      }
    },
    cartDeleteItem: (
      state: cartItemsState[],
      action: PayloadAction<string>,
    ) => {
      const item = action.payload;
      const newState = state.filter((x) => x.productId !== item);
      typeof window !== "undefined" &&
        window.localStorage.setItem("cartItems", JSON.stringify(newState));
      return newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { cartAddItem, cartDeleteItem } = userCartSlice.actions;

export default userCartSlice.reducer;
