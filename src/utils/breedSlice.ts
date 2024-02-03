import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Favorite } from '@dir/types/favorite.types';

interface BreedState {
	favorites: Favorite[];
}

const loadState = (): BreedState => {
	if (typeof window === 'undefined') {
		return { favorites: [] };
	}

	try {
		const serializedState = localStorage.getItem('breedState');
		if (serializedState === null) {
			return { favorites: [] };
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error('Error loading state from local storage:', error);
		return { favorites: [] };
	}
};

const initialState: BreedState = loadState();

const breedSlice = createSlice({
	name: 'breed',
	initialState,
	reducers: {
		addFavorite: (state, action: PayloadAction<Favorite>) => {
			const { breed, images } = action.payload;
			const existingFavorite = state.favorites.find((favorite) => favorite.breed === breed);
			if (existingFavorite) {
				existingFavorite.images.push(...images);
			} else {
				state.favorites.push(action.payload);
			}
			localStorage.setItem('breedState', JSON.stringify(state));
		},
		removeFavorite: (state, action: PayloadAction<{ breed: string; imageUrl: string }>) => {
			const { breed, imageUrl } = action.payload;
			const favoriteIndex = state.favorites.findIndex((favorite) => favorite.breed === breed);
			if (favoriteIndex !== -1) {
				const favorite = state.favorites[favoriteIndex];
				const imageIndex = favorite.images.indexOf(imageUrl);
				if (imageIndex !== -1) {
					favorite.images.splice(imageIndex, 1);
					if (favorite.images.length === 0) {
						state.favorites.splice(favoriteIndex, 1);
					}
					localStorage.setItem('breedState', JSON.stringify(state));
				}
			}
		}
	}
});

export const { addFavorite, removeFavorite } = breedSlice.actions;

export const allFavorites = (state: RootState) => state.breed.favorites;

export const selectFavorites = createSelector(
	(state: RootState) => state.breed.favorites,
	(_, currentBreed: string, imageUrl: string) => ({ currentBreed, imageUrl }),
	(favorites, { currentBreed, imageUrl }) =>
		favorites.filter((favorite: Favorite) => favorite.breed === currentBreed && favorite.images.includes(imageUrl))
);

export default breedSlice.reducer;
