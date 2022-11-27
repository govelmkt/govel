import { Category } from './Category'
import { fetchCategories } from './api'

export const Categories = async () => {
  const categories = await fetchCategories()

  return (
    <section className='mt-12 max-w-4xl mx-auto z-20 container mx-auto'>
      <h2 className='text-xl text-center text-[#E5331F]'>Somos mas que un estudio arquitectonico</h2>
      <p className='uppercase text-center text-3xl text-[#E5331F] text-bold'>Contamos con </p>
      <section className='flex flex-col justify-center mt-12'>
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.attributes.name}
            img={category.attributes.img.data.attributes.url}
          />
        ))}
      </section>
    </section>
  )
}
