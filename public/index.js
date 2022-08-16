import "preact/debug";
import { LocationProvider, Router, Route, lazy, ErrorBoundary, hydrate, prerender as ssr } from 'preact-iso';
import LoginPage from './pages/auth/login.js';
import NotFound from './pages/_404.js';
import Header from './components/header.js';
import RegisterPage from "./pages/auth/register.js";
import Redirect from "./pages/redirect.js";

export function App() {
    return (
        <LocationProvider>
            <Header />
            <ErrorBoundary>
                <Router>
                    <Route path="/" component={Redirect} to="/login" />
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                    <Route default component={NotFound} />
                </Router>
            </ErrorBoundary>
        </LocationProvider>
    );
}

hydrate(<App />, document.getElementById("root"));

export async function prerender(data) {
    return await ssr(<App {...data} />);
}
