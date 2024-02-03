'use client';
import React from 'react';
import './Footerbar.scss';
import { Typography } from '@mui/material';

const Footerbar: React.FC = () => {
	return (
		<footer className="footer">
			<Typography variant="subtitle1" className="footerTxt">
				Created with ❤️ by{' '}
				<a rel="noreferrer" href="https://fredgaringo-main.netlify.app/" target="_blank">
					Fred Garingo
				</a>
			</Typography>
		</footer>
	);
};

export default Footerbar;
