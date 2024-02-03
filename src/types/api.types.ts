import { Breed } from './breed.types';

export type ApiStatus = 'success' | 'error';

export namespace Api {
	export namespace Breeds {
		export namespace Req {}

		export namespace Res {
			export interface Get {
				message: Breed[];
				status: ApiStatus;
			}

			export interface GetByBreed {
				message: string[];
				status: ApiStatus;
			}
		}
	}
}
