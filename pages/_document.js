import { Html, Head, Main, NextScript } from "next/document";
import { storeCode } from '@config';

export default function Document() {
  return (
    <Html lang="en">
        <Head>
          <title>{storeCode === 'senheng_malay_en_US'
            ? 'Senheng | Largest Home Appliances Online Store'
            : 'senQ | Largest Online Digital Station for Home Electrical Appliances'}
          </title>
          <link rel="shortcut icon" href={storeCode === 'senheng_malay_en_US' ? "/favicon_senheng.ico" : "/favicon_senq.ico"} />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
        </Head>
        <body>
            <Main />
            <NextScript />
      </body>
    </Html>
  );
}
