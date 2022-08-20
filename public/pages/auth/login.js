import { useLocation } from 'preact-iso';
import { useEffect, useRef, useState } from 'preact/hooks';
import ModalWindow from '../../components/modalwindow';

export default function LoginPage() {
    const [isModalOpen, setModalOpen] = useState(true)
    const location = useLocation()
    const inputRef = useRef(null)

    useEffect(() => {
        document.title = "로그인"
        inputRef.current?.focus()
    })

    return (
        <>
            <main>
            </main>

            {
                isModalOpen &&
                (<ModalWindow name="로그인해주세요!" class="register-to-login"
                  style="display: flex; flex-direction: column; justify-content: space-between; height: 100%">
                    <form>
                        <label for='email'>이메일</label>
                        <input name="email" type="email" autocomplete="email" ref={inputRef}/>

                        <label for='password'>비밀번호</label>
                        <input name="password" type="password" autocomplete="password"/>
                    </form>
                    <div>
                        <button style={{float: "right"}} onClick={() => {setModalOpen(false)}} role="button">로그인</button>
                        <button onClick={() => {location.route("/register")}} role="button" class="text">회원가입...</button>
                        <div style={{clear: "both"}}></div>
                    </div>

                </ModalWindow>)
            }
            
        </>
    );
}