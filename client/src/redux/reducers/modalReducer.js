import {HIDE_MODAL, SET_MODAL, SHOW_MODAL} from "../types/modalTypes";

const defaultState = {
  show: false,
  title: "test",
  component: <div>test</div>,
};

export function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, show: true };
    case HIDE_MODAL:
      return { ...state, show: false };

    case SET_MODAL:
      return {
        ...state,
        title: action.payload.title,
        component: action.payload.component,
      };

    default:
      return state;
  }
}

export const showModal = () => ({ type: SHOW_MODAL });
export const hideModal = () => ({ type: HIDE_MODAL });
export const setModal = (title, component) => ({
  type: SET_MODAL,
  payload: { title, component },
});
