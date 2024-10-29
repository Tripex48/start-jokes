import { createRootRoute } from '@tanstack/react-router';
import { Outlet, ScrollRestoration } from '@tanstack/react-router';
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start';

import globalLargeStylesUrl from '../styles/global-large.css?url';
import globalMediumStylesUrl from '../styles/global-medium.css?url';
import globalStylesUrl from '../styles/global.css?url';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'description',
      content: 'Learn TanStack Start and laugh at the same time!',
    },
    {
      name: 'twitter:description',
      content: 'Learn TanStack Start and laugh at the same time!',
    },
    {
      title: "TanStack Start: So great, it's funny!",
    },
  ],
  links: () => [
    { rel: 'stylesheet', href: globalStylesUrl },
    {
      rel: 'stylesheet',
      href: globalMediumStylesUrl,
      media: 'print, (min-width: 640px)',
    },
    {
      rel: 'stylesheet',
      href: globalLargeStylesUrl,
      media: 'screen and (min-width: 1024px)',
    },
  ],
  component: RootComponent,
});

function RootComponent() {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  );
}
