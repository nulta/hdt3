import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";

export default function Redirect(props) {
    const location = useLocation()

    useEffect(() => {
        location.route(props.to)
    }, [])

    return null
}