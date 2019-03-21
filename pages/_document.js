import Document, { Head, Main, NextScript } from 'next/document';

// Import styled components ServerStyleSheet
import { ServerStyleSheet, styled } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {

    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();

    // Step 2: Retrieve styles from components in the page
    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />),
    );

    // Step 3: Extract the styles as <style> tags
    const styleTags = sheet.getStyleElement();

    // Step 4: Pass styleTags as a prop
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,700" rel="stylesheet" />
          {/* Step 5: Output the styles in the head  */}
          {this.props.styleTags}
        </Head>
        <body className='__body__'>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
