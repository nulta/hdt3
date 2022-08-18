import { useEffect, useState } from "preact/hooks";

export default function DragSelectHandler() {

    const [startPos, setStartPos] = useState([0, 0])
    const [endPos, setEndPos] = useState([0, 0])
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        /**
         * @param {MouseEvent} ev
         */
        const moveCallback = (ev) => {
            if (ev.buttons != 1) return;

            if (!visible) {
                setVisible(true)
                setStartPos([ev.pageX, ev.pageY])
            }

            setEndPos([ev.pageX, ev.pageY])
        }

        const outCallback = () => {
            setVisible(false)
        }

        window.addEventListener("mousemove", moveCallback)
        window.addEventListener("mouseup", outCallback)
        return () => {
            window.removeEventListener("mousemove", moveCallback)
            window.removeEventListener("mouseup", outCallback)
        }
    })

    function calcPos() {
        let left, top, width, height

        if (endPos[0] < startPos[0]) {
            left = endPos[0]
            width = startPos[0] - endPos[0]
        } else {
            left = startPos[0]
            width = endPos[0] - startPos[0]
        }

        if (endPos[1] < startPos[1]) {
            top = endPos[1]
            height = startPos[1] - endPos[1]
        } else {
            top = startPos[1]
            height = endPos[1] - startPos[1]
        }

        return {left, top, width, height}
    }

    if (visible) {
        return <div style={{...calcPos()}} class="mouse-drag-box"></div>
    } else {
        return null
    }
}
