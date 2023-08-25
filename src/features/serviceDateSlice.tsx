import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

// interface StatusProp {
//   [key: string]: any;

// }

interface ServiceProps {
  serviceData: StatusItem[];
  isLoading: boolean;
  service?: string | undefined;
}

const initialState: ServiceProps = {
  serviceData: [],
  isLoading: true,
  service: "all",
};

interface StatusItem {
  id: number;
  status: string;
  date: any;
  blocker_title: string;
  blocker_info: {
    resolved: string;
    monitoring: string;
  };
  [key: string]: any;
}

// interface RootState {
//   serviceData: ServiceProps;
// }

// export const getServiceData = createAsyncThunk(
//   "serviceData/getServiceData",
//   async (selectedService: string | undefined, thunkAPI) => {
//     let url = ``;

//     if (selectedService) {
//       url += `?service_name=${selectedService}`;
//     }

//     try {
//       const res = await axios.get<any>(url);
//       return res.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue("Ooopppsss! Something went wrong");
//     }
//   }
// );

const serviceDataSlice = createSlice({
  name: "serviceData",
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<string>) => {
      // console.log(action.payload);
      state.service = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getServiceData.pending, (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase(
  //     getServiceData.fulfilled,
  //     (state, action: PayloadAction<StatusItem[]>) => {
  //       state.isLoading = false;
  //       state.serviceData = action.payload;
  //     }
  //   );
  //   builder.addCase(getServiceData.rejected, (state) => {
  //     state.isLoading = false;
  //   });
  // },
});

export const { setService } = serviceDataSlice.actions;
export default serviceDataSlice.reducer;
