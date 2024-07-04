// _document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Primary Meta Tags */}
        <meta name="title" content="Hekto commerce - Home Decor" />
        <meta
          name="description"
          content="At Hekto Furniture, we prioritize our clients' satisfaction and strive to provide an exceptional shopping experience. Our selection of home decor is designed to meet your specific needs, and we maintain high standards in our shopping practices. Whether you're uncertain about your preferences or seeking inspiration, our e-shop offers various resources to help you identify what you're looking for."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hektocommerce.vercel.app/" />
        <meta property="og:title" content="Hekto Furniture - Home Decor" />
        <meta
          property="og:description"
          content="At Hekto Furniture, we prioritize our clients' satisfaction and strive to provide an exceptional shopping experience. Our selection of home decor is designed to meet your specific needs, and we maintain high standards in our shopping practices. Whether you're uncertain about your preferences or seeking inspiration, our e-shop offers various resources to help you identify what you're looking for."
        />
        <meta
          property="og:image"
          content="https://hektocommerce.vercel.app/image.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://hektocommerce.vercel.app/"
        />
        <meta property="twitter:title" content="Hekto Furniture - Home Decor" />
        <meta
          property="twitter:description"
          content="At Hekto Furniture, we prioritize our clients' satisfaction and strive to provide an exceptional shopping experience. Our selection of home decor is designed to meet your specific needs, and we maintain high standards in our shopping practices. Whether you're uncertain about your preferences or seeking inspiration, our e-shop offers various resources to help you identify what you're looking for."
        />
        <meta
          property="twitter:image"
          content="https://hektocommerce.vercel.app/image.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
