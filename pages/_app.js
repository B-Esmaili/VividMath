import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import 'react-pro-sidebar/dist/css/styles.css';
import { Provider as AuthProvider } from 'next-auth/client'

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props

        return (
            <AuthProvider session={pageProps.session}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </AuthProvider>
        )
    }
}