import { HIDE_TAB, SHOW_TAB, TabActionTypes } from "./actions";

export interface TabState {
  isTabVisible: boolean;
}

const initialState: TabState = {
  isTabVisible: true,
};

const tabReducer = (state = initialState, action: TabActionTypes): TabState => {
  switch (action.type) {
    case SHOW_TAB:
      return { ...state, isTabVisible: true };
    case HIDE_TAB:
      return { ...state, isTabVisible: false };
    default:
      return state;
  }
};

export default tabReducer;
