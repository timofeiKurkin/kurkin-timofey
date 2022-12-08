import '../styles/globals.scss'
import Layout from "../components/Layout";
import Custom404 from "./404";
import type {AppProps} from "next/app";
import {AppWrapper} from "../context/store";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <>
            {Component === Custom404 ?
                <Component {...pageProps}/>
                :
                <AppWrapper>
                    <Layout>
                        <Component
							{...pageProps}
                        />
                    </Layout>
                </AppWrapper>
            }
        </>
    )
}

export default MyApp

// ${props => props.media.phone375_639}
// ${props => props.media.phone640_767}
// ${props => props.media.pad768_1023}
// ${props => props.media.desktop1024_1279}
// ${props => props.media.desktop1280_1439}
// ${props => props.media.desktop1440_1919}
// ${props => props.media.desktop1920}
