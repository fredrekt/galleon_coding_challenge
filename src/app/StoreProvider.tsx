'use client';
import { Provider } from 'react-redux';
import store from '@dir/utils/store';

interface StoreProvider {
	children: React.ReactNode;
}

export default function StoreProvider({ children }: StoreProvider) {
	return <Provider store={store}>{children}</Provider>;
}
