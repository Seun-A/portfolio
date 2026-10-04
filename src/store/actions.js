import { supabase } from "@/lib/supabase"

export const ACTION_TYPES = {
  SET_FETCHING_PROJECTS: "SET_FETCHING_PROJECTS",
  SET_PROJECTS_COLLECTION: "SET_PROJECTS_COLLECTION",
  SET_ARTICLES_COLLECTION: "SET_ARTICLES_COLLECTION",
}

const PROJECT_COLUMNS = `
  name,
  description,
  url,
  tag_line,
  stack,
  cover:assets!projects_cover_asset_id_fkey ( title, public_url, original_url ),
  project_images (
    position,
    asset:assets!project_images_asset_id_fkey ( title, public_url, original_url )
  )
`

const ARTICLE_COLUMNS = `
  name,
  description,
  url,
  tag_line,
  cover:assets!articles_cover_asset_id_fkey ( title, public_url, original_url )
`

function imageFromAsset(asset) {
  const url = asset?.public_url || asset?.original_url
  if (!url) return null
  return { title: asset.title ?? "", url }
}

function mapProject(row) {
  const images = [...(row.project_images ?? [])]
    .sort((a, b) => a.position - b.position)
    .map((image) => imageFromAsset(image.asset))
    .filter(Boolean)

  return {
    name: row.name,
    description: row.description,
    url: row.url,
    tagLine: row.tag_line,
    stack: row.stack ?? [],
    coverImage: imageFromAsset(row.cover),
    imagesCollection: { items: images },
  }
}

function mapArticle(row) {
  return {
    name: row.name,
    description: row.description,
    url: row.url,
    tagLine: row.tag_line,
    coverImage: imageFromAsset(row.cover),
  }
}

export const fetchProjectsCollection = async (dispatch) => {
  dispatch({
    type: ACTION_TYPES.SET_FETCHING_PROJECTS,
    payload: true,
  })

  try {
    const [projectsResult, articlesResult] = await Promise.all([
      supabase
        .from("projects")
        .select(PROJECT_COLUMNS)
        .eq("published", true)
        .order("position", { ascending: true }),
      supabase
        .from("articles")
        .select(ARTICLE_COLUMNS)
        .eq("published", true)
        .order("position", { ascending: true }),
    ])

    if (projectsResult.error) throw projectsResult.error
    if (articlesResult.error) throw articlesResult.error

    dispatch({
      type: ACTION_TYPES.SET_PROJECTS_COLLECTION,
      payload: (projectsResult.data ?? []).map(mapProject),
    })
    dispatch({
      type: ACTION_TYPES.SET_ARTICLES_COLLECTION,
      payload: (articlesResult.data ?? []).map(mapArticle),
    })
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false,
    })
  } catch (error) {
    dispatch({
      type: ACTION_TYPES.SET_FETCHING_PROJECTS,
      payload: false,
    })
    console.error(error)
  }
}
