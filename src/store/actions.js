import {
  GET_PROJECTS_COLLECTION,
} from "@/query/contentful"

export const ACTION_TYPES = {
  SET_FETCHING_PROJECTS: "SET_FETCHING_PROJECTS",
  SET_PROJECTS_COLLECTION: "SET_PROJECTS_COLLECTION",
  SET_ARTICLES_COLLECTION: "SET_ARTICLES_COLLECTION",
}

const fetchContentfulData = async (query) => {
  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query: query }),
  })

  const { data } = await response.json()
  return data
}

export const fetchProjectsCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_PROJECTS,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_PROJECTS_COLLECTION)

    dispatch({
      type: ACTION_TYPES.SET_PROJECTS_COLLECTION,
      payload: response?.projectCollection?.items ?? [],
    })
    dispatch({
      type: ACTION_TYPES.SET_ARTICLES_COLLECTION,
      payload: response?.articleCollection?.items ?? [],
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false
    })
    console.error(error)
  }
}
