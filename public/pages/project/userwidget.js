import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';

export default function UserWidget(props) {
    const location = useLocation()
    const projectRoot = location.path.replace(/^(\/projects\/.+?\/).+/, "$1")

    return (
        <aside class="user-widget">
            Username
        </aside>
    )
}