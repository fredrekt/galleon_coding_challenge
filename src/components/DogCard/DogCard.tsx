'use client';
import React, { useState } from 'react';
import './DogCard.scss';
import { Card, CardActionArea, CardActions, CardMedia } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite, selectFavorites } from '@dir/utils/breedSlice';

interface DogCardProps {
	imageUrl: string;
	currentBreed: string;
	title?: string;
}

const DogCard: React.FC<DogCardProps> = ({ imageUrl, currentBreed, title }) => {
	const dispatch = useDispatch();
	const favorites = useSelector(selectFavorites);
	const [like, setLike] = useState<boolean>(favorites.some((favorite: any) => favorite.breed === currentBreed));

	const triggerLike = () => {
		if (title) {
			dispatch(removeFavorite({ breed: currentBreed, imageUrl }));
			return;
		}
		setLike(!like);
		// update local storage & dispatch (redux)
		if (like) {
			console.log('dislike');
			dispatch(removeFavorite({ breed: currentBreed, imageUrl }));
		} else {
			console.log('like');
			dispatch(addFavorite({ breed: currentBreed, images: [imageUrl] }));
		}
	};

	return (
		<Card className="dogCard">
			<CardActionArea onClick={triggerLike}>
				<CardMedia loading="lazy" component="img" alt={'dog'} height={300} width={300} image={imageUrl} />
				<CardActions>
					<FavoriteIcon className={`saveFavorite ${like || title ? 'saved' : ''}`} />
				</CardActions>
			</CardActionArea>
		</Card>
	);
};

export default DogCard;
