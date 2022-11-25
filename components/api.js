const baseApi = 'https://govel-backend-production.up.railway.app/api/'

export const fetchCategories = async () => {
  const endpoint = 'categories?populate=image'
  const result = await fetch(`${baseApi}${endpoint}`)
  const json = await result.json()
  const { data } = await json
  return data
}
