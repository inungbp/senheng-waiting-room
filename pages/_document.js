import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
        <Head>
            <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap"
            rel="stylesheet"
            />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />

            <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-P2J3ZCPB');`,
                }}
            />
        </Head>
        <body>
            <noscript>
                <iframe
                    src="https://www.googletagmanager.com/ns.html?id=GTM-P2J3ZCPB"
                    height="0"
                    width="0"
                    style={{display: "none", visibility: "hidden"}} />
            </noscript>
            <Main />
            <NextScript />
      </body>
    </Html>
  );
}
