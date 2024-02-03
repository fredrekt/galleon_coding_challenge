import { configureStore } from '@reduxjs/toolkit';
import breedReducer from './breedSlice';

const initialState = {
	breed: {
		favorites: []
	}
};

const store = configureStore({
	reducer: {
		breed: breedReducer
	},
	preloadedState: initialState
});

if (typeof window !== 'undefined') {
	store.subscribe(() => {
		try {
			const serializedState = JSON.stringify(store.getState().breed);
			localStorage.setItem('breedState', serializedState);
		} catch (error) {
			console.error('Error saving state to local storage:', error);
		}
	});
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
