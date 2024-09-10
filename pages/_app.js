// pages/_app.js

import Script from 'next/script';
import { useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import '../public/styles/choices.min.css';
function MyApp({ Component, pageProps }) {


  return (
    <>
        <Script
        strategy="afterInteractive"
        src="/js/tech-stack.js"
        onLoad={() => console.log('tech loaded')}
      /> 
     <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"  // Ensure the script is loaded after the page is interactive
        onLoad={() => console.log('Bootstrap JS loaded')}
      />

<Script
        src="/js/plugins/datepicker-full.min.js"
        strategy="beforeInteractive"  // Ensure the script is loaded after the page is interactive
        onLoad={() => console.log('datepicker JS loaded')}
      />

      
<Script
        src="/js/plugins/choices.min.js"
        strategy="beforeInteractive"  // Ensure the script is loaded after the page is interactive
        onLoad={() => console.log('Choice JS loaded')}
      />
     

    
      
     
      <Layout>
     
      <Component {...pageProps} />
      </Layout>
  
      {/* <Script
        // strategy="afterInteractive"
        src="/js/plugins/popper.min.js"
        onLoad={() => console.log('popper.min.js loaded')}
      />
      <Script
        // strategy="beforeInteractive"
        src="/js/plugins/simplebar.min.js"
        onLoad={() => console.log('simplebar.min.js loaded')}
      />
      <Script
        // strategy="afterInteractive"
        src="/js/plugins/bootstrap.min.js"
        onLoad={() => console.log('bootstrap.min.js loaded')}
      />
      <Script
        // strategy="afterInteractive"
        src="/js/fonts/custom-font.js"
        onLoad={() => console.log('custom-font.js loaded')}
      />
      <Script
        // strategy="afterInteractive"
        src="/js/pcoded.js"
        onLoad={() => console.log('pcoded.js loaded')}
      />
      <Script
        // strategy="afterInteractive"
        src="./js/plugins/feather.min.js"
        onLoad={() => console.log('feather.min.js loaded')}
      />  */}

    </>
  );
}

export default MyApp;
