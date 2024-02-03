import Navbar from '@dir/components/Navbar/Navbar';
import theme from '@dir/utils/theme';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './global.scss';
import Footerbar from '@dir/components/Footerbar/Footerbar';

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
