import Navbar from '@component/components/Navbar/Navbar';
import theme from '@component/utils/theme';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './global.scss';
import Footerbar from '@component/components/Footerbar/Footerbar';

export const metadata = {
	title: 'Dogs.',
	description: 'All about dogs, coding challenge.'
};

interface RootLayout {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayout) {
	return (
		<html lang="en">
			<body>
				<AppRouterCacheProvider>
					<ThemeProvider theme={theme}>
						<Navbar />
						{children}
						<Footerbar />
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
