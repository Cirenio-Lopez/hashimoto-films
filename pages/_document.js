import Document, { Html, Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="icon" href="/logo.ico" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link rel="stylesheet" href="https://use.typekit.net/epj0xhu.css" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-[#1e2025] text-white min-h-full relative">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
