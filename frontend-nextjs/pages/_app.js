import { useState } from 'react/cjs/react.development';
import Layout from '../layout/Layout';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showNew, setShowNew] = useState(false)
  const toggleAddNewButtonFun = (show) => {
    setShowNew(!show)
  }
  return(
    <Layout showNew={showNew} toggleAddNewButtonFun={toggleAddNewButtonFun}>
      <Component showNew={showNew} toggleAddNewButtonFun={toggleAddNewButtonFun} {...pageProps}/>
    </Layout>
  );
}

export default MyApp
