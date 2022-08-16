import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import ModalWindow from '../../components/modalwindow';

export default function LoginPage() {
    const [isModalOpen, setModalOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {document.title = "로그인"})

    return (
        <>
            <main>
            </main>

            {
                isModalOpen &&
                (<ModalWindow name="로그인해주세요!">
                    <form>
                        <label for='email' type="text">이메일</label>
                        <input name="email"/>

                        <label for='password'>비밀번호</label>
                        <input name="password" type="password"/>
                    </form>
                    <div>
                        <button onClick={() => {location.route("/register")}} role="button" class="text">회원가입...</button>
                        <button style={{float: "right"}} onClick={() => {setModalOpen(false)}} role="button">로그인</button>
                        <div style={{clear: "both"}}></div>
                    </div>

                </ModalWindow>)
            }
            
        </>
    );
}