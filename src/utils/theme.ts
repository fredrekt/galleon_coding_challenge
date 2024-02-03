// src/theme.ts
'use client';
import { createTheme } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap'
});

const theme = createTheme({
	typography: {
		fontFamily: montserrat.style.fontFamily
	},
	components: {
		MuiAutocomplete: {
			styleOverrides: {
				inputRoot: {
					borderRadius: 0
				}
			}
		}
	}
});

export default theme;
