import "@styles/globals.css";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "@lib/createEmotionCache";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "@styles/theme";
import { AppPropsWithLayout } from "@models/page";
import Head from "next/head";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Thanh Long</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
