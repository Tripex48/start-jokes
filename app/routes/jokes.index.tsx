import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/jokes/')({
  component: JokesIndexComponent,
});

function JokesIndexComponent() {
  return (
    <div>
      <p>Here&apos;s a random joke:</p>
      <p>Testing</p>
      <Link to="/">&quot;Testing&quot; Permalink</Link>
    </div>
  );
}
