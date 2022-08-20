export default function Window({class: classes, name, children, style}) {
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
