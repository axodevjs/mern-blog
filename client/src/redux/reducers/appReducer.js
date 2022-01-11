import {HIDE_LOADER, HIDE_OVERLAY, HIDE_SIDEBAR, SHOW_LOADER, SHOW_OVERLAY, SHOW_SIDEBAR} from "../types/appTypes";

const defaultState = {
  loader: false,
  sidebar_active: false,
  overlay_active: false,
};

export default function appReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loader: true };
    case HIDE_LOADER:
      return { ...state, loader: false };

    case SHOW_SIDEBAR:
      return { ...state, sidebar_active: true };
    case HIDE_SIDEBAR:
      return { ...state, sidebar_active: false };

    case SHOW_OVERLAY:
      return { ...state, overlay_active: true };
    case HIDE_OVERLAY:
      return { ...state, overlay_active: false };

    default:
      return state;
  }
}

export const showLoader = () => ({ type: SHOW_LOADER });
export const hideLoader = () => ({ type: HIDE_LOADER });

export const showSidebar = () => ({ type: SHOW_SIDEBAR });
export const hideSidebar = () => ({ type: HIDE_SIDEBAR });

export const showOverlay = () => ({ type: SHOW_OVERLAY });
export const hideOverlay = () => ({ type: HIDE_OVERLAY });
