import { useLocation } from 'preact-iso';
import { useContext, useEffect, useState } from 'preact/hooks';
import UserContext from '../../classes/usercontext';

export default function UserWidget() {
    const user = useContext(UserContext)

    return (
        <aside class="user-widget">
            <img src={user?.avatarUrl} class="user-avatar"></img>
            <div>
                <span class="user-username">{user?.username ?? "로그인해주세요!"}</span><br/>
                Hello!
            </div>
        </aside>
    )
}