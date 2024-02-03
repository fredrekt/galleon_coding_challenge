'use client';
import React from 'react';
import './DogCard.scss';

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
