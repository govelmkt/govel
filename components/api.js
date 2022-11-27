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
