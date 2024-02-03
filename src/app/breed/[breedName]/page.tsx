import { getByBreed } from '@dir/api/api';
import DogCard from '@dir/components/DogCard/DogCard';
import { Container, Grid } from '@mui/material';
import React from 'react';

const BreedSlugpage = async ({ params }: { params: { breedName: string } }) => {
	const { message } = await getByBreed(params.breedName);

	const renderBreedImages = () => {
		if (!Array.isArray(message) || !message.length) {
			return;
		}
		return (
			<Grid container margin={{ md: 5 }} spacing={2} marginTop={{ xs: 2, sm: 2 }} marginBottom={{ xs: 2, sm: 2 }}>
				{message.map((imgUrl, id) => (
					<Grid width={`100%`} key={id} item md={3}>
						<DogCard currentBreed={params.breedName} key={id} imageUrl={imgUrl} />
					</Grid>
				))}
			</Grid>
		);
	};

	return <Container>{renderBreedImages()}</Container>;
};

export default BreedSlugpage;
