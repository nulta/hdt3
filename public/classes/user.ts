const defaultAvatar = "http://placekitten.com/256/256"

export class User {
    constructor(
        public email: string,
        public username: string,
        public avatarUrl: string = defaultAvatar,
    ) {}
}