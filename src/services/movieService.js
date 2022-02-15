import httpService from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/movies';

export function getMovies() {
    return httpService.get(apiEndpoint);
}

export function deleteMovie(movieId) {
    return httpService.delete(apiEndpoint + '/' + movieId);
}