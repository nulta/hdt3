import { Project } from "../classes/project";

export default function ProjectCard({project}: {project: Project}) {
	return (
        <a href={project.getHref()} class="link-no-underline">
            <div class="project-card">
                <span class="name">{project.name}</span>
                <span class="desc">{project.desc}</span>
            </div>
        </a>
	);
}
