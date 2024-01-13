'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                'html, body': {
                    width: '100%',
                    height: '100%',
                    minHeight: '100vh',
                },
                '#__next': {
                    display: 'flex',
                    justifyContent: 'center',

                    width: '100%',
                    height: '100%',
                    minHeight: '100%',
                    backgroundColor: '#E7E9EB',
                    overflowY: 'auto',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.severity === 'info' && {
                        backgroundColor: '#60a5fa',
                    }),
                }),
            },
        },
    },
});

export default theme;
