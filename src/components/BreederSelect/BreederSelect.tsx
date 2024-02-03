'use client';
import React, { useEffect, useState } from 'react';
import './BreederSelect.scss';
import { Api } from '@dir/types/api.types';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getListOfBreeds } from '@dir/api/api';

const BreederSelect: React.FC = () => {
	const [listOfBreeds, setListOfBreeds] = useState<string[]>([]);
	const router = useRouter();

	const loadListOfBreeds = async () => {
		try {
			const res: Api.Breeds.Res.Get = await getListOfBreeds();
			setListOfBreeds(Object.keys(res.message));
			console.log(JSON.stringify(Object.keys(res.message)));
		} catch (error) {
			console.error(`Something wen't wrong in getting list of breeds.`);
		}
	};

	useEffect(() => {
		loadListOfBreeds();
	}, []);

	const onChange = (value: string | undefined) => {
		if (!value) return;
		router.push(`/breed/${value}`);
	};

	const renderSelect = () => {
		if (!Array.isArray(listOfBreeds) || !listOfBreeds.length) {
			return <CircularProgress />;
		}

		const options = listOfBreeds.map((data) => ({
			label: data
		}));
		return (
			<>
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={options}
					sx={{ width: `100%` }}
					onChange={(e, value) => onChange(value?.label)}
					renderInput={(params) => <TextField {...params} label="Select Breed" />}
				/>
			</>
		);
	};

	return <>{renderSelect()}</>;
};

export default BreederSelect;
