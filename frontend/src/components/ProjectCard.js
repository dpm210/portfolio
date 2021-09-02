import Accordion from 'react-bootstrap/Accordion'
function ProjectCard({project}){


    return (
        <div>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>
                        <h2>{project.name}</h2>
                    </Accordion.Header>
                    <Accordion.Body>
                        <p className='project-description'>{project.description}</p>
                        <h4><a href={project.github_link}>Github</a></h4>
                        <h4><a href={project.demo_link}>Demo</a></h4>
                    </Accordion.Body>
                </Accordion.Item>
        </div>
    )
}
export default ProjectCard