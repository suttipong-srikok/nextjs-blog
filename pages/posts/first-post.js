import Script from 'next/script';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const YourComponent = () => (
    <Image 
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Your Name"
    />
);

export default function FirstPost() {
  return (
    <>
      <Head>
          <title>First Post</title>
          <Script 
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
                console.log(`script loaded correctly, window.FB has been populated`)
            }
          />
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <YourComponent />
    </>
  );
}