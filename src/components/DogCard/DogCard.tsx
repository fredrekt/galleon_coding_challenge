'use client';
import React, { useState } from 'react';
import './DogCard.scss';
import { Card, CardActionArea, CardActions, CardMedia, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface DogCardProps {
	imageUrl: string;
}

const DogCard: React.FC<DogCardProps> = ({ imageUrl }) => {
	const [like, setLike] = useState<boolean>(false);

	const triggerLike = () => {
		setLike(!like);
		// update local storage
	};

	return (
		<Card className="dogCard">
			<CardActionArea onClick={triggerLike}>
				<CardMedia component="img" alt={'dog'} height={300} width={300} image={imageUrl} />
				<CardActions onClick={triggerLike}>
					<FavoriteIcon className={`saveFavorite ${like ? 'saved' : ''}`} />
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default DogCard;
