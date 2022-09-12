import { Document } from "./document";

export class Project {
    constructor(
        public readonly id: string,
        public name: string,
        public desc: string,
        public documents: Document[],
    ) {}

    getHref() {
        return `/project/${this.id}`
    }
}
