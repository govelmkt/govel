const baseApi = 'https://govel-backend-production.up.railway.app/api/'

export const fetchCategories = async () => {
  const endpoint = 'categories?populate=img'
  const result = await fetch(`${baseApi}${endpoint}`)
  const json = await result.json()
  const { data } = await json
  return data
}

export const fetchSlides = async () => {
  const endpoint = 'slides?populate=img'
  const result = await fetch(`${baseApi}${endpoint}`)
  const json = await result.json()
  const { data } = await json
  return data
}

export const fetchProjects = async () => {
  const endpoint = 'projects?populate=images'
  const result = await fetch(`${baseApi}${endpoint}`)
  const json = await result.json()
  const { data } = await json
  return data
}

export const postMessage = ({ data }) => {
  window.alert(JSON.stringify(data, null, 2))
}

export const fetchProject = async (slug) => {
  const endpoint = `projects?filters\\[Slug\\][$eq]=${slug}&populate=images&populate=category`
  const result = await fetch(`${baseApi}${endpoint}`)
  const json = await result.json()
  const { data } = await json
  const { attributes } = data[0]
  const { name, description, images, category } = await attributes
  const { data: cat } = category
  const { data: imgs } = images
  return {
    name,
    description,
    imgs,
    cat
  }
}
