import { createSlice } from "@reduxjs/toolkit";

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
  selectedCake: CakeItem[];
}
const initialState: SelectedCakeProps = {
  isLoading: true,
  selectedCake: [],
};
const selectedCakeSlice = createSlice({
  name: "cakeData",
  initialState,
  reducers: {
    selectCake: (state, action) => {
      state.selectedCake = action.payload;
    //   return action.payload;
    },
  },
});

export const { selectCake } = selectedCakeSlice.actions;
export default selectedCakeSlice.reducer;
