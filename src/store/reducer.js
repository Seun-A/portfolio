import { ACTION_TYPES } from "./actions"

export const initialState = {
  isFetchingProjects: false,
  projects: [],
  articles: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FETCHING_PROJECTS:
      return {
        ...state,
        isFetchingProjects: action.payload,
      }

    case ACTION_TYPES.SET_PROJECTS_COLLECTION:
      return {
        ...state,
        projects: action.payload,
      }

    case ACTION_TYPES.SET_ARTICLES_COLLECTION:
      return {
        ...state,
        articles: action.payload,
      }

    default:
      return state
  }
}
