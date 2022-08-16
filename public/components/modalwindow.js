import Window from "./window";
import { createPortal } from "preact/compat";

export default function ModalWindow(props) {
    const modals = document.querySelector("#modal")
    const {children, ...otherProps} = props

    return createPortal(
        <Window {...otherProps}>
            {children}
        </Window>
    , modals)
}
