import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import { Project } from '../../classes/project';

export default function ProjectNav({project}: {project: Project}) {
    const location = useLocation()
    const projectRoot = location.path.replace(/^(\/projects\/.+?\/).+/, "$1")

    return (
        <aside class="project-nav">
            <h1>
                <a href={projectRoot}>{project.name}</a>
            </h1>
            <p>{project.desc}</p>
        </aside>
    )
}