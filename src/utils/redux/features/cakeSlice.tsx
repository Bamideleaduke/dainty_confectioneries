import { createSlice } from "@reduxjs/toolkit";
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
  selectedCake: CakeItem;
}
const initialState: SelectedCakeProps = {
  isLoading: true,
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
};
const selectedCakeSlice = createSlice({
  name: "cakeData",
  initialState,
  reducers: {
    selectCake: (state, action) => {
      state.selectedCake = action.payload;
      localStorage.setItem("selectedCake", JSON.stringify(action.payload));

      // const localStorageData = localStorage.getItem("selectedCake");

      // if (localStorageData) {
      //   state.selectedCake = JSON.parse(localStorageData);
      // } else {
      //   state.selectedCake = action.payload;
      //   localStorage.setItem("selectedCake", JSON.stringify(action.payload));
      // }
    },
  },
});

export const { selectCake } = selectedCakeSlice.actions;
export default selectedCakeSlice.reducer;
