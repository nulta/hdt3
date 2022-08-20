import Window from "../components/window";
import { useLocation } from "preact-iso";
import DragSelectHandler from "../components/dragselecthandler";

export default function NotFound() {
    const location = useLocation()

    return (
        <>
            <DragSelectHandler></DragSelectHandler>

            <div class="centered-page">
                <Window name="오류가 발생했어요..!" style="text-align: center">
                    <h1 class="no-margin">404 Not Found</h1>
                    <p>백엔드 아저씨가 이렇게 전해달래요!</p>
                    <code class="block">
                        {`> 아, 우리 라우터 왔어? 뭐 필요한데?\n`}
                        {`- `}<span style={{color:"#00ffcc"}}>{location.path}</span>{` 페이지를 가져다달래요!\n`}
                        {`> 응? `}<span style={{color:"#00ffcc"}}>{location.path}</span>{`?\n`}
                        {`> 우린 그런 페이지 없는디?`}
                    </code>
                </Window>
            </div>
        </>
    )
}
