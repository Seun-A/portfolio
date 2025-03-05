const QUERY_CONSTANTS = {
  HEADER_MENU_ID: "5FHETl4uEHiFGBbQlkqGIl",
  PAGE_SECTION_ID__HERO: "5FHETl4uEHiFGBbQlkqGIl",
}

export const GET_HERO_IMAGES_QUERY = `
  query {
    pageSection (id: "${QUERY_CONSTANTS.PAGE_SECTION_ID__HERO}") {
      title
      imagesCollection {
        total
        items {
          title
          url
        }
      }    
    }
  }
`

export const GET_SKILLS_QUERY = `
  query {
    skillCollection {
      total
      items {
        name
        icon {
          url
          title
        }
      }
    }
  }
`

export const GET_PROJECTS_COLLECTION = `
  query {
    projectCollection {
      total
      items {
        name
        description
        url
        isWip
        isCollaboration
        isLive
        coverImage {
          url
          title
        }
        imagesCollection {
          items {
            url
            title
          }
        }
      }
    }
  }
`










export const GET_SOCIAL_COLLECTION_QUERY = `
  query {
    socialCollection {
      items {
        name
        url
        icon {
          url
          title
        }
      }
    }
  }
`

export const GET_TESTIMONIALS_QUERY = `
  query {
    testimonialCollection {
      items {
        _id
        name
        about
        website
        feedback
        avatar {
          title
          url
        }
      }
    }
  }
`
