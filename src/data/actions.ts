export const startLoading = () => ({ type: "START_LOADING" } as const);
export const stopLoading = () => ({ type: "STOP_LOADING" } as const);

export type LoadingAction = ReturnType<
  typeof startLoading | typeof stopLoading
>;

export const SHOW_TAB = "SHOW_TAB";
export const HIDE_TAB = "HIDE_TAB";

export interface ShowTabAction {
  type: typeof SHOW_TAB;
}

export interface HideTabAction {
  type: typeof HIDE_TAB;
}

export type TabActionTypes = ShowTabAction | HideTabAction;

export const showTab = () => ({
  type: SHOW_TAB,
});

export const hideTab = () => ({
  type: HIDE_TAB,
});
