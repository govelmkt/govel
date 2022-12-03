import Image from 'next/image'
import Link from 'next/link'
import { BiArrowBack } from 'react-icons/bi'
import { fetchProject } from '../../../components/api'

const ProjectPage = async ({ params }) => {
  const { slug } = params
  const project = await fetchProject(slug)
  return (
    <div className='bg-[#565555] w-full'>
      <div className='flex items-start justify-between w-full'>
        <div
          className='bg-[#565555] p-24 h-screen pt-96 w-1/2 -z-10'
          style={{ position: 'fixed' }}
        >
          <div className='mb-10 text-white'>
            <Link href='/projects'><BiArrowBack style={{ display: 'inline-block' }} /> Regresar a Proyectos</Link>
          </div>
          <h1 className='text-white text-6xl mb-10'>{project.name}</h1>
          <p className='text-white text-xl mb-10'>{project.description}</p>
          <span className='bg-white p-4 mb-10 rounded-lg'>{project.cat.attributes.name}</span>
          <p className='text-white mt-10'>
            Tel. 3781217912<br />
            Mayas #760 <br />
            Las Colonias<br />
            Tepatitlán de Morelos, Jalisco
          </p>
        </div>
        <div className='w-1/2 bg-[#565555] mt-[6.7rem] absolute right-0 top-0 '>
          {project.imgs.map((img) => <Image key={img.attributes.alternativeText} src={`https://govel-backend-production.up.railway.app${img.attributes.url}`} height={1280} width={720} alt={project.name} style={{ margin: '0 auto' }} />)}
        </div>
      </div>
    </div>
  )
}
export default ProjectPage
