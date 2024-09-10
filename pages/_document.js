import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>

      <link rel="icon" href="../images/favicon.svg" type="image/x-icon" />
  {/* [Font] Family */}
  <link
    rel="stylesheet"
    href="../fonts/inter/inter.css"
    id="main-font-link"
  />
  {/* [phosphor Icons] https://phosphoricons.com/ */}
  <link rel="stylesheet" href="../fonts/phosphor/duotone/style.css" />
  {/* [Tabler Icons] https://tablericons.com */}
  <link rel="stylesheet" href="../fonts/tabler-icons.min.css" />
  {/* [Feather Icons] https://feathericons.com */}
  <link rel="stylesheet" href="../fonts/feather.css" />
  {/* [Font Awesome Icons] https://fontawesome.com/icons */}
  <link rel="stylesheet" href="../fonts/fontawesome.css" />
  {/* [Material Icons] https://fonts.google.com/icons */}
  <link rel="stylesheet" href="../fonts/material.css" />
  {/* [Template CSS Files] */}
  <link rel="stylesheet" href="../css/style.css" id="main-style-link" />
  <link rel="stylesheet" href="../css/style-preset.css" />


    <link rel="stylesheet" href="../fonts/inter/inter.css" id="main-font-link"/>
    <link rel="stylesheet" href="../css/plugins/datepicker-bs5.min.css"></link>
<link rel="stylesheet" href="../css/style.css" id="main-style-link"/>
    <script src="../js/tech-stack.js"></script>
      </Head>
      <body data-pc-direction="ltr"
    data-pc-layout="vertical"
    data-pc-preset="preset-1"
    data-pc-sidebar-caption="true"
    data-pc-theme="light"
    data-pc-theme_contrast="">
        <Main />
        <NextScript />

    
      </body>
     
    </Html>
  );
}
