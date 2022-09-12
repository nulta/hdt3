import { useLocation } from 'preact-iso';
import { useEffect, useRef, useState } from 'preact/hooks';
import ModalWindow from '../../components/modalwindow';

export default function RegisterPage() {
    const [isModalOpen, setModalOpen] = useState(true)
    const location = useLocation()
    const inputRef = useRef(null)

    useEffect(() => {
        document.title = "회원가입"
        inputRef.current.focus()
    })

    return (
        <>
            <main>
            </main>

            {
                isModalOpen &&
                (<ModalWindow name="회원가입이에요!" class="login-to-register">
                    <form>
                        <label for='email'>이메일</label>
                        <input name="email" type="email" autocomplete="email" ref={inputRef} />

                        <label for='nickname'>닉네임</label>
                        <input name="nickname" type="text" autocomplete='username'/>

                        <label for='password'>비밀번호</label>
                        <input name="password" type="password" placeholder='비밀번호' autocomplete="new-password"/>
                        <input name="password" type="password" placeholder='비밀번호 재입력' autocomplete="new-password"/>
                    </form>
                    <div class="button-area">
                        <button onClick={() => {setModalOpen(false)}} role="button">회원가입</button>
                        <button onClick={() => {location.route("/login")}} role="button" class="text">로그인...</button>
                    </div>
                </ModalWindow>)
            }
            
        </>
    );
}