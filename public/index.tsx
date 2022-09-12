import "preact/debug";
import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso';
import LoginPage from './pages/auth/login.js';
import NotFound from './pages/_404.js';
import Header from './components/header.js';
import RegisterPage from "./pages/auth/register.js";
import Redirect from "./pages/redirect.js";
import ProjectPage from "./pages/project/index.js";
import UserContext from "./classes/usercontext.js";
import { User } from "./classes/user.js";
import ProjectListPage from "./pages/projectlist.js";
import CachedContext from "./classes/cachedcontext.js";
import { Project } from "./classes/project.js";
import { Document } from "./classes/document.js";

export function App() {
    const mockupUser = new User("example@example.com", "HDT")
    const mockupProject = new Project("abcd", "이름은 없지만 하늘을 날고 싶은 프로젝트", "설명", [])
    const mockupDocument = new Document("aaaa", "문서 이름", null)
    mockupProject.documents.push(mockupDocument)
    const mockupCache = {
        project: mockupProject,
        currentDocument: mockupDocument,
    }

    return (
        <LocationProvider>
            <UserContext.Provider value={mockupUser}>
                <CachedContext.Provider value={mockupCache}>
                    <Header />
                    <ErrorBoundary>
                        <Router>
                            <Route path="/" component={Redirect} to="/login" />
                            <Route path="/login" component={LoginPage} />
                            <Route path="/register" component={RegisterPage} />
                            <Route path="/project" component={ProjectListPage} />
                            <Route path="/project/:projectId*" component={ProjectPage} />
                            <Route default component={NotFound} />
                        </Router>
                    </ErrorBoundary>
                </CachedContext.Provider>
            </UserContext.Provider>
        </LocationProvider>
    );
}

hydrate(<App />, document.getElementById("root"));

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
