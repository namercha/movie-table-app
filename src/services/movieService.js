import httpService from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + '/movies';

function movieUrl(id) {
    return `${apiEndpoint}/${id}`;
}

export function getMovies() {
    return httpService.get(apiEndpoint);
}

export function getMovie(movieId) {
    return httpService.get(movieUrl(movieId));
}

export function saveMovie(movie) {
    if (movieId._id) {
        const body = {...movie };
        delete body_.id;
        return httpService.put(movieUrl(movie._id), body);
    }

    return httpService.post(apiEndpoint, movie);
}

export function deleteMovie(movieId) {
    return httpService.delete(movieUrl(movieId));
}