import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';

/**
 * @param {{project: import("./project_structure").Project}} props
 */
export default function ProjectNav(props) {
    const location = useLocation()
    const projectRoot = location.path.replace(/^(\/projects\/.+?\/).+/, "$1")

    const {id: projectId, name: projectName} = props.project

    return (
        <aside class="project-nav">
            <h1>
                <a href={projectRoot}>{projectName}</a>
            </h1>
        </aside>
    )
}