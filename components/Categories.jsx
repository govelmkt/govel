import { Category } from './Category'
import { fetchCategories } from './api'

export default async function Categories ({ params }) {
  const categories = await fetchCategories()

  return (
    <section className='mt-12'>
      <h2 className='text-xl text-center text-[#E5331F]'>Somos mas que un estudio arquitectonico</h2>
      <p className='uppercase text-center text-3xl text-[#E5331F] text-bold'>Contamos con </p>
      <section className='flex flex-col justify-center mt-12'>
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.attributes.name}
            img={category.attributes.image.data.attributes.formats.large.url}
          />
        ))}
      </section>
    </section>
  )
}
