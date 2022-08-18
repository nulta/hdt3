import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import ProjectNav from './projectnav';
import styles from './style.module.css'

export default function ProjectPage() {
    const [isModalOpen, setModalOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {document.title = "Project"})

    return (
        <div class={styles.columns}>
            <div class={styles.asideColumn}>
                <ProjectNav project={{id: "aaaa", name: "bbbb", desc: "cccc"}}></ProjectNav>
            </div>
            <main>
                hi main
            </main>
        </div>
    )
}