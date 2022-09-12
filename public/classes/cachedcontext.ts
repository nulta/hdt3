import { createContext } from "preact";
import { Document } from "./document";
import { Project } from "./project";

type CachedContextData = {
    project: Project,
    currentDocument: Document
}

const CachedContext = createContext<CachedContextData>(null)
export default CachedContext
