import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import {
  AppShell,
  Burger,
  Center,
  Container,
  Group,
  MantineProvider,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { theme } from '../theme';
import { useDisclosure } from '@mantine/hooks';
import Header from '@/components/Header/Header';

export default function App({ Component, pageProps }: AppProps) {
  const [opened, { toggle }] = useDisclosure();
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppShell header={{ height: 60, offset: false }}>
        <AppShell.Header withBorder={false} zIndex={100} bg={'rgba(255,255,255,0)'}>
          <Header />
        </AppShell.Header>

        {/* <AppShell.Navbar p="md">Navbar</AppShell.Navbar> */}
        <AppShell.Main>
          <Component {...pageProps} />
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
