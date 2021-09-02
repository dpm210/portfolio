import { useEffect } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import ProjectCard from './ProjectCard'

function Projects({projects}){

    const projectsArray = projects.map(project =>
            <ProjectCard key={project.id} project={project} />
    )
    return (
        <div>
            <h1>Projects</h1>
                {projectsArray}
        </div>
    )
}
export default Projects