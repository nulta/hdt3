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

export function App() {
    return (
        <LocationProvider>
            <UserContext.Provider value={new User("example@example.com", "HDT")}>
                <Header />
                <ErrorBoundary>
                    <Router>
                        <Route path="/" component={Redirect} to="/login" />
                        <Route path="/login" component={LoginPage} />
                        <Route path="/register" component={RegisterPage} />
                        <Route path="/project" component={ProjectPage} />
                        <Route default component={NotFound} />
                    </Router>
                </ErrorBoundary>
            </UserContext.Provider>
        </LocationProvider>
    );
}

hydrate(<App />, document.getElementById("root"));

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
