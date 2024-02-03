import { Api } from '@dir/types/api.types';
import axios from 'axios';
import './config';

/**
 * Get All Dog breeds
 * This request gets a list of dog breeds.
 * @link https://dog.ceo/dog-api/documentation
 **/
export const getListOfBreeds = async (): Promise<Api.Breeds.Res.Get> => {
	try {
		return (await axios.get(`/breeds/list/all`)).data;
	} catch (error) {
		console.error(`Something went wrong in getting list of dog breeds.`, error);
		throw error;
	}
};

/**
 * Get All Dog by breed
 * This request gets a list of images of dogs by breed.
 * @link https://dog.ceo/dog-api/documentation
 **/
export const getByBreed = async (breed: string): Promise<Api.Breeds.Res.GetByBreed> => {
	if (!breed) {
		console.error(`Missing paremeter.`);
		throw 'Missing Parameter breed.';
	}
	try {
		return (await axios.get(`/breed/${breed}/images`)).data;
	} catch (error) {
		console.error(`Something went wrong in getting list of dog by breed.`, error);
		throw error;
	}
};
