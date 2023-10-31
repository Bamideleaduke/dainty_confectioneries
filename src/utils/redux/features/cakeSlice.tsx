import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { type } from "@testing-library/user-event/dist/type";

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
  selectedCake: CakeItem;
  order: [];

}
const initialState: SelectedCakeProps = {
  isLoading: true,
  amount: 0,
  price: 0,
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
  order:[]
};
const selectedCakeSlice = createSlice({
  name: "cakeData",
  initialState,
  reducers: {
    selectCake: (state, action) => {
      state.selectedCake = action.payload;
      localStorage.setItem("selectedCake", JSON.stringify(action.payload))
    },
    // increase: (store, {payload}:PayloadAction<{id:string}>) => {
      // const cartItems = store.cartItems.find((item) => item.id === payload.id);
      // if (cartItems) cartItems.amount = cartItems.amount + 1;
    // },
    // decrease: (store, action: PayloadAction<{ id: string }>) => {
      // const cartItems = store.cartItems.find(
      //   (item) => item.id === action.payload.id
      // );
      // if (cartItems) cartItems.amount = cartItems.amount - 1;
    // },
    // calculateTotal: (store) => {
    //   let amount = 0;
    //   let total = 0;
      // store.cartItems.forEach((item) => {
      //   amount += item.amount;
      //   // total += item.total * item.price;
      //   total += item.price * item.amount;
      // });
      // store.amount = amount;
      // store.total = total;
    // },
  },
});

export const { selectCake } = selectedCakeSlice.actions;
export default selectedCakeSlice.reducer;
