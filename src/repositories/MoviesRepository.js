import customAxios from "../axios/customAxios";

const MoviesRepository = {
    getAllMovies: () => customAxios.get('/movies'),

    addMovie: (title, description, yearOfRelease, genre) => {
        console.log(title);
        const params = new URLSearchParams();
        params.append('title', title);
        params.append('description', description);
        params.append('yearOfRelease', yearOfRelease);
        params.append('genre', genre);

        return customAxios.post('/movies', params);
    }
};


export default MoviesRepository;