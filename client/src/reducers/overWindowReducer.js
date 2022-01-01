const SHOW_WINDOW = "SHOW_WINDOW";
const HIDE_WINDOW = "HIDE_WINDOW";
const SET_WINDOW = "SET_WINDOW";

const defaultState = {
  show: false,
  title: "Title",
  component: <div>Lorem ipsum</div>,
};

export function overWindowReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_WINDOW:
      return { ...state, show: true };
    case HIDE_WINDOW:
      return { ...state, show: false };

    case SET_WINDOW:
      return {
        ...state,
        title: action.payload.title,
        component: action.payload.component,
      };

    default:
      return state;
  }
}

export const showWindow = () => ({ type: SHOW_WINDOW });
export const hideWindow = () => ({ type: HIDE_WINDOW });
export const setWindow = (title, component) => ({
  type: SET_WINDOW,
  payload: { title, component },
});
