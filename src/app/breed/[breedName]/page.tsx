import { getByBreed } from '@dir/api/api';
import DogCard from '@dir/components/DogCard/DogCard';
import React from 'react';

const BreedSlugpage = async ({ params }: { params: { breedName: string } }) => {
	const { message } = await getByBreed(params.breedName);

	const renderBreedImages = () => {
		if (!Array.isArray(message) || !message.length) {
			return;
		}
		return (
			<>
				{message.map((imgUrl, id) => (
					<DogCard key={id} imageUrl={imgUrl} />
				))}
			</>
		);
	};

	return <div>{renderBreedImages()}</div>;
};

export default BreedSlugpage;
