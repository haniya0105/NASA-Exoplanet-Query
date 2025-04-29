import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
        <title>NASA Exoplanet Query</title>
        <link rel="icon" href="./../public/nasa-logo.svg" />
        <body className="antialiased">
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap" rel="stylesheet" />
      <Main />
        <NextScript />
      </body>
    </Html>
  );
}
