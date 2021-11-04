import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          
          {/* <title>Amfelo | Admin</title> */}
          <link
            rel="stylesheet"
            href="vendors/mdi/css/materialdesignicons.min.css"
          />
          <link
            rel="stylesheet"
            href="vendors/css/vendor.bundle.base.css"
          />
          <link rel="stylesheet" href="css/style.css" />
          <link rel="shortcut icon" href="images/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="vendors/js/vendor.bundle.base.js"></script>
          <script src="vendors/chart.js/Chart.min.js"></script>
          <script src="js/off-canvas.js"></script>
          <script src="js/hoverable-collapse.js"></script>
          <script src="js/misc.js"></script>
          <script src="js/dashboard.js"></script>
          <script src="js/todolist.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
