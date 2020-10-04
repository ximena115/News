import { createStore, applyMiddleware } from "redux";
import thunk from "react-thunk";
import Reducer from "./Reducer"

const store = createStore(Reducer, applyMiddleware(thunk));

export default store;