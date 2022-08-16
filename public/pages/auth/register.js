import { useLocation } from 'preact-iso';
import { useEffect, useState } from 'preact/hooks';
import ModalWindow from '../../components/modalwindow';

export default function RegisterPage() {
    const [isModalOpen, setModalOpen] = useState(true)
    const location = useLocation()

    useEffect(() => {document.title = "회원가입"})

    return (
        <>
            <main>
            </main>

            {
                isModalOpen &&
                (<ModalWindow name="회원가입이에요!">
                    <form>
                        <label for='email' type="text">이메일</label>
                        <input name="email"/>

                        <label for='email' type="text">닉네임</label>
                        <input name="email"/>

                        <label for='password'>비밀번호</label>
                        <input name="password" type="password" placeholder='비밀번호'/>
                        <input name="password" type="password" placeholder='비밀번호 재입력'/>
                    </form>
                    <div>
                        <button onClick={() => {location.route("/login")}} role="button" class="text">로그인...</button>
                        <button style={{float: "right"}} onClick={() => {setModalOpen(false)}} role="button">회원가입</button>
                        <div style={{clear: "both"}}></div>
                    </div>

                </ModalWindow>)
            }
            
        </>
    );
}