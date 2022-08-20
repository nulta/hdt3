import { useEffect } from "preact/hooks";
import { useLocation } from "preact-iso";

export default function Redirect({to}: {to: string}) {
    const location = useLocation()

    useEffect(() => {
        location.route(to)
    }, [])

    return null
}