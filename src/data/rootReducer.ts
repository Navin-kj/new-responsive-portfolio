import { combineReducers } from "redux";
import loadingReducer, { LoadingState } from "./reducers";
import tabReducer, { TabState } from "./tabReducer";

export interface RootState {
  loading: LoadingState;
  tab: TabState;
  // ... other slices of state
}
const rootReducer = combineReducers({
  loading: loadingReducer,
  tab: tabReducer,
});

export default rootReducer;
