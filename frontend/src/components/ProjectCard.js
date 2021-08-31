import Carousel from 'react-bootstrap/Carousel' 
function ProjectCard({project}){


    return (
        <div>
                <Carousel>
                    <h2>{project.name}</h2>
                    <p>{project.description}</p>
                    <h4><a href={project.github_link}>Github</a></h4>
                    <h4><a href={project.demo_link}>Demo</a></h4>
                </Carousel>
        </div>
    )
}
export default ProjectCard