'use client';
import { allFavorites } from '@dir/utils/breedSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DogCard from '@dir/components/DogCard/DogCard';
import { Container, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material';

const Favoritespage = () => {
	const favorites = useSelector(allFavorites);
	const [filterOptions, setFilterOptions] = useState(
		favorites.map((data) => ({
			label: data.breed
		}))
	);
	const [selectedFilter, setSelectedFilter] = useState<string>('');

	const renderFavoriteImages = () => {
		if (!Array.isArray(favorites) || !favorites.length) {
			return <Typography component={'p'}>No favorites found.</Typography>;
		}

		let filteredFavorites = favorites;

		if (selectedFilter) {
			filteredFavorites = favorites.filter((favorite) => favorite.breed === selectedFilter);

			if (!filteredFavorites.length) {
				return <Typography component={'p'}>No favorites found for breed: {selectedFilter}.</Typography>;
			}
		}

		return (
			<Grid container spacing={2}>
				<Grid width={`100%`} item>
					{filteredFavorites.map((favorite, id) => (
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

	const renderFilters = () => {
		if (!Array.isArray(favorites) || !favorites.length) {
			return;
		}

		return (
			<>
				<FormControl fullWidth>
					<InputLabel id="select-breed-filter">Filter by Breed</InputLabel>
					<Select
						labelId="select-breed-filter"
						id="demo-simple-select"
						value={selectedFilter}
						label="Filter by Breed"
						onChange={(e) => setSelectedFilter(e.target.value)}
					>
						{favorites.map((data) => (
							<MenuItem value={data.breed}>{data.breed}</MenuItem>
						))}
					</Select>
				</FormControl>
			</>
		);
	};

	return (
		<Container style={{ marginTop: `35px`, marginBottom: `35px` }}>
			{renderFilters()}
			{renderFavoriteImages()}
		</Container>
	);
};

export default Favoritespage;
