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
                    <div>
                        <h1 class="no-margin">404 Not Found</h1>
                        <p class="no-margin">그런 페이지는 없어요..!</p>
                        <p class="graytext no-margin-bottom">원래부터 없었거나.. 어쩌면 어느샌가 사라졌을 수도 있어요.</p>
                    </div>
                    <div class="button-area">
                        <button onClick={() => {history.back()}} role="button">돌아가기</button>
                    </div>
                </Window>
            </div>
        </>
    )
}
