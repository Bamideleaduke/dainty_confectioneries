import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CakeItem {
  id: string;
  type: string;
  price: number;
  image: string;
  description: {
    "Cake flavours": string;
    "Cake size": string;
    "Icing type": string;
    Colour: string;
    "Preparation and delivery": string;
  };
}
interface SelectedCakeProps {
  isLoading: boolean;
  amount: number;
  price: number;
  total: number;
  selectedCake: CakeItem;
  order:  CakeItem[];
}
const initialState: SelectedCakeProps = {
  isLoading: true,
  amount: 1,
  price: 0,
  total: 0,
  selectedCake: {
    id: "",
    type: "",
    price: 0,
    image: "",
    description: {
      "Cake flavours": "",
      "Cake size": "",
      "Icing type": "",
      Colour: "",
      "Preparation and delivery": "",
    },
  },
  order: [],
};
const selectedCakeSlice = createSlice({
  name: "cakeData",
  initialState,
  reducers: {
    selectCake: (state, action) => {
      state.selectedCake = action.payload;
      localStorage.setItem("selectedCake", JSON.stringify(action.payload));
    },
    addToOrder: (state, action: PayloadAction<CakeItem>) => {
      state.order.push(action.payload);
    },
    increase: (store, action) => {
      const cartItems = store.selectedCake.id === action.payload.id;
      if (cartItems) store.amount += 1;
    },
    decrease: (store, action) => {
      const cartItems = store.selectedCake.id === action.payload.id;

      if (cartItems) store.amount = store.amount - 1;
    },
    calculateTotal: (store, action) => {
        store.total = action.payload * store.amount;
    },
  },
});

export const { selectCake, increase, decrease, calculateTotal,addToOrder } =
  selectedCakeSlice.actions;
export default selectedCakeSlice.reducer;
