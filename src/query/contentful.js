export const GET_PROJECTS_COLLECTION = `
  query {
    projectCollection {
      total
      items {
        name
        description
        url
        tagLine
        coverImage {
          title
          url
        }
        imagesCollection {
          items {
            title
            url
          }
        }
        stack
      }
    }
    
    articleCollection {
      total
      items {
        name
        description
        url
        tagLine
        coverImage {
          title
          url
        }
      }
    }
  }
`
