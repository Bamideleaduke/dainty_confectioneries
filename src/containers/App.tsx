import "../App.css";
import { ThemeProvider } from "@mui/system";
import AppRoutes from "./AppRoutes";
// import { theme } from "../theme";
import { GlobalTheme } from "../utils/material-themes";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../utils/redux/store";
// import { useEffect } from "react";
// import { calculateTotal, selectCake } from "../utils/redux/features/cakeSlice";
// import { useAppDispatch } from "../utils/hooks/redux-hook";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={GlobalTheme}>
          <AppRoutes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
