import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
    return (
      <Html lang="en">
        <Head>
     
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      rel="stylesheet"
    />
    <title>Google Keep Clone</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
}