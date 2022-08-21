export class Project {
    constructor(
        public id: string,
        public name: string,
        public desc: string,
    ) {}

    getHref() {
        return `/project/${this.id}`
    }
}
