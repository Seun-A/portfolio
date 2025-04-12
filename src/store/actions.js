import {
  GET_HERO_IMAGES_QUERY,
  GET_SKILLS_QUERY,
  GET_PROJECTS_COLLECTION,
  GET_IMPACT_COLLECTION,



  GET_SOCIAL_COLLECTION_QUERY,
  GET_TESTIMONIALS_QUERY,
} from "@/query/contentful"

export const ACTION_TYPES = {
  SET_FETCHING_HERO_IMAGES: "SET_FETCHING_HERO_IMAGES",
  SET_HERO_IMAGES_COLLECTION: "SET_HERO_IMAGES_COLLECTION",
  SET_FETCHING_SKILLS: "SET_FETCHING_SKILLS",
  SET_SKILLS_COLLECTION: "SET_SKILLS_COLLECTION",
  SET_FETCHING_PROJECTS: "SET_FETCHING_PROJECTS",
  SET_PROJECTS_COLLECTION: "SET_PROJECTS_COLLECTION",
  SET_FETCHING_IMPACT: "SET_FETCHING_IMPACT",
  SET_IMPACT_COLLECTION: "SET_IMPACT_COLLECTION",




  SET_FETCHING_SOCIALS: "SET_FETCHING_SOCIALS",
  SET_SOCIALS_COLLECTION: "SET_SOCIALS_COLLECTION",
  SET_FETCHING_TESTIMONIALS: "SET_FETCHING_TESTIMONIALS",
  SET_TESTIMONIALS_COLLECTION: "SET_TESTIMONIALS_COLLECTION",
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


export const fetchHeroImagesCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_HERO_IMAGES,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_HERO_IMAGES_QUERY)
    
    dispatch({
      type: ACTION_TYPES.SET_HERO_IMAGES_COLLECTION,
      payload: response?.pageSection?.imagesCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_HERO_IMAGES,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_HERO_IMAGES,
      payload: false
    })
    console.error(error)
  }
}

export const fetchSkillsCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_SKILLS,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_SKILLS_QUERY)
    
    dispatch({
      type: ACTION_TYPES.SET_SKILLS_COLLECTION,
      payload: response?.skillCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_SKILLS,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_SKILLS,
      payload: false
    })
    console.error(error)
  }
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
      payload: response?.pageSection?.projectsCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false
    })
    console.error(error)
  }
}

export const fetchImapactCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_IMPACT,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_IMPACT_COLLECTION)
    
    dispatch({
      type: ACTION_TYPES.SET_IMPACT_COLLECTION,
      payload: response?.pageSection?.projectsCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_IMPACT,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_IMPACT,
      payload: false
    })
    console.error(error)
  }
}









export const fetchSocialsCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_SOCIALS,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_SOCIAL_COLLECTION_QUERY)
    
    dispatch({
      type: ACTION_TYPES.SET_SOCIALS_COLLECTION,
      payload: response?.socialCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_SOCIALS,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_SOCIALS,
      payload: false
    })
    console.error(error)
  }
}

export const fetchTestimonials = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_TESTIMONIALS,
    payload: true
  })
  
  try {
    const response = await fetchContentfulData(GET_TESTIMONIALS_QUERY)
    
    dispatch({
      type: ACTION_TYPES.SET_TESTIMONIALS_COLLECTION,
      payload: response?.testimonialCollection?.items
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_TESTIMONIALS,
      payload: false
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_TESTIMONIALS,
      payload: false
    })
    console.error(error)
  }
}
