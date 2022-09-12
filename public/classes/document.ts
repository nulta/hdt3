import { Project } from "./project";

export class Document {
    constructor(
        public readonly id: string,
        public name: string,
        public readonly parent: Project,
    ) {}

    getHref() {
        return `${this.parent.getHref()}/${this.id}`
    }
}
