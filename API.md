# API Endpoints

# /auth
> User Authentication과 관련된 API들이다. 인증은 2가지 방식이 있는데, 각각 세션 기반 인증과 APIKey 인증이다. 기본적으로 일반적인 웹 클라이언트는 세션 인증 방식을, 다른 소프트웨어의 API Request는 APIKey 방식을 따른다. 세션 인증의 절차는 다음과 같다.
>
> 1. 클라이언트가 `/auth/login` 페이지에 ID와 PW를 POST로 전달한다
>    - 서버는 SessionId 쿠키를 만들어서 클라이언트에 보낸다
>    - 클라이언트는 SessionId 쿠키를 저장한다
> 2. 클라이언트는 요청을 할 때마다 SessionId 쿠키를 같이 보낸다
>    - 서버는 매 요청마다 SessionId를 검증한다
> 3. 로그아웃이 필요할 때, 클라이언트는 `/auth/logout` 페이지에 SessionId 쿠키를 보낸다
>    - 서버는 SessionId의 세션을 만료한다
> 
> APIKey 인증 방식은 복잡한 절차를 따르지 않는다.
> 
> 1. 클라이언트는 인증이 필요한 요청을 할 때마다 `Authentication: Apikey <API Key>` 헤더에 미리 발급받은 API Key를 넣어 보낸다.

## POST /auth/login

### 요청
| key      | type   | optional | description      |
|----------|--------|----------|------------------|
| email    | string | 필수     | 사용자 이메일     |
| password | string | 필수     | 비밀번호          |

### 응답
- 200 OK
    - Secure HttpOnly SameSite 쿠키인 `sessionid`
- 403 Forbidden

## POST /auth/logout

