import Head from 'next/head';
import { MantineProvider, createEmotionCache } from '@mantine/core';
import Layout from '../components/ui/Layout';
import '../styles/globals.css';
import rtlPlugin from 'stylis-plugin-rtl';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

export default function App(props) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
        theme={{
          colorScheme: 'dark',
          dir: 'rtl',
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </>
  );
}
