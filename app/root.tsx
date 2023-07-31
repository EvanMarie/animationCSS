import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import organizationalStyles from "./styles/organizational.css";
import defaultStyles from "./styles/defaults.css";
import mainContainerStyles from "./styles/mainContainer.css";
import MainContainer from "./components/organizational/mainContainer";

export const links: LinksFunction = () => [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap",
  },
  { rel: "stylesheet", href: defaultStyles },
  { rel: "stylesheet", href: organizationalStyles },
  { rel: "stylesheet", href: mainContainerStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainContainer header="Animation CSS">
          <Outlet />
        </MainContainer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
