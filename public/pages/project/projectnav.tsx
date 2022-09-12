import { useContext } from 'preact/hooks';
import CachedContext from '../../classes/cachedcontext';

export default function ProjectNav() {
    const project = useContext(CachedContext).project

    return (
        <aside class="project-nav">
            <h1>
                <a href={project.getHref()}>{project.name}</a>
            </h1>
            <p>{project.desc}</p>
        </aside>
    )
}