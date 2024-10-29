import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

import stylesUrl from '../styles/jokes.css?url';

export const Route = createFileRoute('/jokes')({
  links: () => [{ rel: 'stylesheet', href: stylesUrl }],
  component: JokesComponent,
});

function JokesComponent() {
  return (
    <div className="jokes-layout">
      <header className="jokes-header">
        <div className="container">
          <h1 className="home-link">
            <Link to="/" title="TanStack Start Jokes" aria-label="TansStack Start Jokes">
              <span className="logo">🤪</span>
              <span className="logo-medium">J🤪KES</span>
            </Link>
          </h1>
          <Link to="/">Login</Link>
        </div>
      </header>
      <main className="jokes-main">
        <div className="container">
          <div className="jokes-list">
            <p>
              <Link to=".">Get a random joke</Link>
            </p>
            <p>
              <Link to="/">Download jokes</Link>
            </p>
            <p>Here are a few more jokes to check out:</p>
            <Link to="/" className="button">
              Add your own
            </Link>
          </div>
          <div className="jokes-outlet">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
}
