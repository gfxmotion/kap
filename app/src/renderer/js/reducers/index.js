export default function mainReducer(state, action) {
  switch (action.type) {
    case 'MAIN_WINDOW_STICK_TO_MENUBAR': {
      return {
        ...state,
        windows: {
          ...state.windows,
          main: {
            ...state.windows.main,
            stuck: true
          }
        }
      }
    }

    case 'MAIN_WINDOW_UNSTICK_FROM_MENUBAR': {
      return {
        ...state,
        windows: {
          ...state.windows,
          main: {
            ...state.windows.main,
            stuck: false
          }
        }
      }
    }

    default: {
      return state
    }
  }
}
