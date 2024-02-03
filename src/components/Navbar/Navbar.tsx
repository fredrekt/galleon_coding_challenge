'use client';
import React from 'react';
import './Navbar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logoImg from '@dir/app/logo.png';

const pages = ['Favorites', 'About', 'Contact Us'];

const Navbar: React.FC = () => {
	const router = useRouter();
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = (page?: string) => {
		setAnchorElNav(null);
		if (page) {
			let navigateTo: string = '';
			switch (page.toLowerCase()) {
				case 'about':
					navigateTo = 'about';
					break;
				case 'contact us':
					navigateTo = 'contact';
					break;
				case 'favorites':
					navigateTo = 'favorites';
					break;
				default:
					navigateTo = '';
					break;
			}
			router.push(`/${navigateTo}`);
			console.log('page: ', page);
		}
	};

	return (
		<div className="navbar">
			<AppBar color="inherit" position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link className="navbarLogo" href="/">
							<Image src={logoImg} width={35} height={35} alt="logo" />
							<Typography
								variant="h5"
								noWrap
								sx={{
									mr: 2,
									display: { xs: 'none', md: 'flex' },
									fontWeight: 700,
									color: 'inherit',
									textDecoration: 'none'
								}}
							>
								Dogs.
							</Typography>
						</Link>

						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left'
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left'
								}}
								open={Boolean(anchorElNav)}
								onClose={() => handleCloseNavMenu()}
								sx={{
									display: { xs: 'block', md: 'none' }
								}}
								color="inherit"
							>
								{pages.map((page) => (
									<MenuItem color="inherit" key={page} onClick={() => handleCloseNavMenu()}>
										<Typography textAlign="center">{page}</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							component="a"
							href="#app-bar-with-responsive-menu"
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none'
							}}
						>
							LOGO
						</Typography>
						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								justifyContent: { md: 'center' },
								gap: 7
							}}
						>
							{pages.map((page) => (
								<Button
									color="inherit"
									key={page}
									onClick={() => handleCloseNavMenu(page)}
									sx={{
										my: 2,
										display: 'block',
										textTransform: 'capitalize',
										letterSpacing: `0.05em`
									}}
								>
									{page}
								</Button>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Navbar;
