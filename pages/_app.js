import '../styles/globals.css'
import '../styles/header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <> 
    <Header />
    <Component {...pageProps} />
    <Footer />
    </>)
}

export default MyApp;
