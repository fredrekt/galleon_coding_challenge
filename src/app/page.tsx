import BreederSelect from '@dir/components/BreederSelect/BreederSelect';
import { Box } from '@mui/material';
import React from 'react';

const Homepage: React.FC = () => {
	return (
		<div>
			<Box margin={{ md: 20, xs: 5, sm: 5 }}>
				<BreederSelect />
			</Box>
		</div>
	);
};

export default Homepage;
