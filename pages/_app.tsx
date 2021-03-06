import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/shared/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
