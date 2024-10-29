import { createFileRoute, Link } from '@tanstack/react-router';

import stylesUrl from '../styles/index.css?url';

export const Route = createFileRoute('/')({
  links: () => [{ rel: 'stylesheet', href: stylesUrl }],
  component: Home,
});

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>
          TanStack Start <span>Jokes!</span>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/jokes">Read Jokes</Link>
            </li>
            <li>
              <Link to="/">Download Jokes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
