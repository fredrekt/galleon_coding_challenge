import React from 'react';
import './Dog.scss';

interface DogCardProps {
	imageUrl: string;
}

const DogCard: React.FC<DogCardProps> = ({ imageUrl }) => {
	return (
		<div className="dogCard">
			<img src={imageUrl} alt="dog" />
		</div>
	);
};

export default DogCard;
