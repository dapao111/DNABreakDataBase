import '../styles/globals.css'
import Page from '../components/page'
import { useEffect,useState } from 'react'
import client from './libs/apollo_config'
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const[showchild,setShowChild] = useState(false)
  useEffect(()=>{
    setShowChild(true)
  },[])
  if(!showchild)
  {
    return  null
  }
  return  <ApolloProvider client={client}>
          <Page>
            <Component {...pageProps} />
          </Page>
  </ApolloProvider>
}

export default MyApp
