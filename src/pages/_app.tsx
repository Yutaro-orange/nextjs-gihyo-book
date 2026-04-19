import { AppProps } from "next/app";
import Head from "next/head"
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@/styles/globalStyle";
import { theme } from "@/themes";

const MyApp = ({ Component, pageProps} : AppProps) => {
    return (
        <>
            <Head>
                <meta key="charset" content="utf-8" />
                <meta
                 key="viewport"
                 name="viewport"
                 content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5" />
                 <meta property="og:locale" content="ja_JP" />
                 <meta property="og:type" content="website" />
            </Head>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}
export default MyApp