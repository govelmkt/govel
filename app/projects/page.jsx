import { fetchProjects } from '../../components/api'
import { Project } from '../../components/Project'

const Projects = async () => {
  const projects = await fetchProjects()
  return (
    <div className='bg-[#565555]'>
      <div className='flex items-start justify-between w-full relative'>
        <div
          className='bg-[#565555] p-24 h-screen pt-96 w-1/2 -z-10'
          style={{ position: 'fixed' }}
        >
          <h1 className='text-white text-6xl mb-10'>Proyectos</h1>
          <p className='text-white'>
            Tel. 3781217912<br />
            Mayas #760 <br />
            Las Colonias<br />
            Tepatitlán de Morelos, Jalisco
          </p>
        </div>
        <div className='w-1/2 bg-[#565555] mt-[6.7rem] absolute right-0 top-0'>
          {projects && projects.map(project => <Project key={project.id} project={project} />)}
          {!projects && <div className='flex items-center w-1/2 justify-center mt-96 fixed text-white'>No hay proyectos para mostrar</div>}
        </div>
      </div>
    </div>
  )
}

export default Projects
