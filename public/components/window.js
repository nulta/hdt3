export default function Window(props) {
	return (
		<div class="window">
            <div class="titlebar">
                {props.name}
            </div>

            <div class="content" style={props.style}>
                {props.children}
            </div>
        </div>
	);
}
