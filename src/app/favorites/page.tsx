'use client';
import { allFavorites } from '@dir/utils/breedSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import DogCard from '@dir/components/DogCard/DogCard';
import { Container, Grid, Typography } from '@mui/material';

const Favoritespage = () => {
	const favorites = useSelector(allFavorites);

	const renderFavoriteImages = () => {
		if (!Array.isArray(favorites) || !favorites.length) {
			return <Typography component={'p'}>No favorites found.</Typography>;
		}
		return (
			<Grid container margin={{ md: 5 }} spacing={2} marginTop={{ xs: 2, sm: 2 }} marginBottom={{ xs: 2, sm: 2 }}>
				<Grid width={`100%`} item>
					{favorites.map((favorite, id) => (
						<Grid container spacing={2}>
							<Grid item md={12}>
								<h4 style={{ marginBottom: 0 }}>
									{favorite.breed.charAt(0).toUpperCase() + favorite.breed.slice(1)}
								</h4>
							</Grid>
							{favorite.images.map((imageUrl, index) => (
								<Grid width={`100%`} key={id} item md={3}>
									<DogCard
										title={favorite.breed}
										currentBreed={favorite.breed}
										key={index}
										imageUrl={imageUrl}
									/>
								</Grid>
							))}
						</Grid>
					))}
				</Grid>
			</Grid>
		);
	};

	return <Container>{renderFavoriteImages()}</Container>;
};

export default Favoritespage;
