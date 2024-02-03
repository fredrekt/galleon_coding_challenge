'use client';
import React from 'react';
import './DogCard.scss';
import Image from 'next/image';

interface DogCardProps {
	imageUrl: string;
}

const DogCard: React.FC<DogCardProps> = ({ imageUrl }) => {
	return (
		<div className="dogCard">
			<Image src={imageUrl} alt="dog" width={300} height={300} />
		</div>
	);
};

export default DogCard;
