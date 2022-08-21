import {ComponentChildren} from "preact"
type ParamType = {class?: string, name: string, children: ComponentChildren, style?: string}

export default function Window({class: classes, name, children, style}: ParamType) {
	return (
		<div class={"window appear-animation " + (classes || "")}>
            <div class="titlebar">
                {name}
            </div>

            <div class="content" style={style}>
                {children}
            </div>
        </div>
	);
}
