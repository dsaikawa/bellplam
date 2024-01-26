import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { AppShell, MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import Header from '@/components/Header/Header';
import { Provider } from 'jotai';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isTopPage = router.pathname === '/';

  return (
    <MantineProvider theme={theme}>
      <Provider>
        <Head>
          <title>Bellplam portfolio</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <AppShell header={{ height: 60, offset: !isTopPage }}>
          <AppShell.Header
            withBorder={!isTopPage}
            style={{ borderColor: 'black' }}
            zIndex={100}
            bg={isTopPage ? 'rgba(255,255,255,0)' : 'white'}
          >
            <Header color={isTopPage ? 'white' : 'black'} />
          </AppShell.Header>

          <AppShell.Main>
            <Component {...pageProps} />
          </AppShell.Main>
        </AppShell>
      </Provider>
    </MantineProvider>
  );
}
