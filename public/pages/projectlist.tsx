import { useEffect, useState } from "preact/hooks";
import { Project } from "../classes/project";
import ProjectCard from "../components/projectcard";
import Window from "../components/window";

export default function ProjectListPage() {

    // Mock-up function
    async function getProjectList() {
        await new Promise((resolve) => {resolve(1)});
        return [
            new Project("abcd", "한 프로젝트", "프로젝트 설명"),
            new Project("efgh", "Project 2", "Description 2"),
            new Project("ijkl", "Project 3", "Description3"),
            new Project("mnop", "Project 4", "Description 4"),
        ]
    }

    const [projectList, setProjectList] = useState<Project[]>(null)

    useEffect(() => {
        (async () => {
            setProjectList(await getProjectList())
        })()
    })
    
    return (
        <div class="centered-page">
            <Window name="프로젝트 목록" style="display: flex; flex-direction: column; gap: 10px;">
                {
                    !projectList
                    ? "로딩 중..."
                    : projectList.map((project) => <ProjectCard project={project} />)
                }
            </Window>
        </div>
    )
}
