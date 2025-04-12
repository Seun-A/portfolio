import { ACTION_TYPES } from "./actions"

export const initialState = {
  isFetchingHeroImages: false,
  heroImages: [],
  isFetchingSkills: false,
  skills: [],
  isFetchingProjects: false,
  projects: [],
  isFetchingImpactCollection: false,
  impactCollection: [],



  isFetchingSocials: false,
  socialsCollection: [],
  isFetchingTestimonials: false,
  testimonialsCollection: [],
}

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_FETCHING_HERO_IMAGES:
      return {
        ...state,
        isFetchingHeroImages: action.payload,
      }
    case ACTION_TYPES.SET_HERO_IMAGES_COLLECTION:
      return {
        ...state,
        heroImages: action.payload
      }
    case ACTION_TYPES.SET_FETCHING_SKILLS:
      return {
        ...state,
        isFetchingSkills: action.payload,
      }
    case ACTION_TYPES.SET_SKILLS_COLLECTION:
      return {
        ...state,
        skills: action.payload
      }
    case ACTION_TYPES.SET_FETCHING_PROJECTS:
      return {
        ...state,
        isFetchingProjects: action.payload,
      }
    case ACTION_TYPES.SET_PROJECTS_COLLECTION:
      return {
        ...state,
        projects: action.payload
      }
    case ACTION_TYPES.SET_FETCHING_IMPACT:
      return {
        ...state,
        isFetchingImpactCollection: action.payload,
      }
    case ACTION_TYPES.SET_IMPACT_COLLECTION:
      return {
        ...state,
        impactCollection: action.payload
      }

    
    
    
    
    
    case ACTION_TYPES.SET_FETCHING_SOCIALS:
      return {
        ...state,
        isFetchingSocials: action.payload,
      }
    case ACTION_TYPES.SET_SOCIALS_COLLECTION:
      return {
        ...state,
        socialsCollection: action.payload
      }
    case ACTION_TYPES.SET_FETCHING_TESTIMONIALS:
      return {
        ...state,
        isFetchingTestimonials: action.payload,
      }
    case ACTION_TYPES.SET_TESTIMONIALS_COLLECTION:
      return {
        ...state,
        testimonialsCollection: action.payload
      }
    default:
      return state
  }
}
