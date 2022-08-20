export default function Window(props) {
    const {class: classes, name, children, style} = props
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
