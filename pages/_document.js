import Document, { Html, Head,Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">   
        <meta charset=" UTF-8"></meta>
          <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>         
        <body>  
          <Head/>    
         <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}