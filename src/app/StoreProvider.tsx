'use client';
import { Provider } from 'react-redux';
import store from '@dir/utils/store';
import { useEffect } from 'react';
import { setState } from '@dir/utils/breedSlice';

interface StoreProviderProps {
	children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
	// mock persistent state workaround
	useEffect(() => {
		const savedState = typeof window !== 'undefined' && localStorage.getItem('breedState');
		if (savedState) {
			const parsedState = JSON.parse(savedState);
			store.dispatch(setState(parsedState));
		}
	}, []);

	return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
