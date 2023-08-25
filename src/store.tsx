import { createStore } from "redux";
import rootReducer from "./features/rootReducer";

const store = createStore(rootReducer);

export default store;
