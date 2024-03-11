import Header from "../components/header/Header";
import {
    Button,
    Container,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import './movies.css'
import {useEffect, useState} from "react";
import MoviesRepository from "../repositories/MoviesRepository";
import MovieDetailsDialog from "../components/movie-details-dialog/MovieDetailsDialog";
import AddMovie from "../components/add-movie-dialog/AddMovie";

function Movies() {

    const columns = [
        'Title',
        'Genre',
        'Year of release',
        'Average rating'
    ]
    const [movies, setMovies] = useState()

    const [selectedMovie, setSelectedMovie] = useState();

    const [selectedMovieRating, setSelectedMovieRating] = useState()

    const [isMovieDetailsDialogOpen, setIsMovieDetailsDialogOpen] = useState(false);

    const [isAddMovieDialogOpen, setIsAddMovieDialogOpen] = useState(false);

    const [updateMovies, setUpdateMovies] = useState(false);

    useEffect(() => {
        MoviesRepository.getAllMovies().then(response => setMovies(response.data));
    }, []);

    useEffect(() => {
        MoviesRepository.getAllMovies().then(response => setMovies(response.data));
    }, [updateMovies]);

    const pickMovie = (movie, averageRating) => {
      setSelectedMovie(movie);
      setSelectedMovieRating(averageRating);
      setIsMovieDetailsDialogOpen(true);
    }

    const handleCloseMovieDetailsDialog = () => {
      setIsMovieDetailsDialogOpen(false);
    }

    const openAddMovieDialog = () => {
      setIsAddMovieDialogOpen(true);
    }

    const handleCloseMovieDialog = () => {
      setIsAddMovieDialogOpen(false)
    }

    return <div id={'movies-page'}>
        <Header selectedPage={'Movies'}/>
        <Container className={'page-container'}>
            <Button color={'success'} variant={'contained'} className={'add-movie-button'}
                    onClick={() => openAddMovieDialog()}>Add a movie +</Button>
            <TableContainer component={Paper}>
                <Table aria-label="simple table" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => <TableCell key={index}>{column}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {movies && Object.entries(movies).map(([movieStr, averageRating]) => {
                            const movieDetails = movieStr.match(/\(([^)]+)\)/)[1].split(", ");
                            const movie = {};
                            movieDetails.forEach(detail => {
                                const [key, value] = detail.split("=");
                                movie[key] = value;
                            });
                            return (
                                <TableRow key={movie.id} className={'table-row'} onClick={() => pickMovie(movie, averageRating.toFixed(2))}>
                                    <TableCell>{movie.title}</TableCell>
                                    <TableCell>{movie.genre}</TableCell>
                                    <TableCell>{movie.yearOfRelease}</TableCell>
                                    <TableCell>{averageRating.toFixed(2)}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <MovieDetailsDialog isOpen={isMovieDetailsDialogOpen} movie={selectedMovie} averageRating={selectedMovieRating}
                                handleClose={handleCloseMovieDetailsDialog}/>
            <AddMovie isOpen={isAddMovieDialogOpen} handleClose={handleCloseMovieDialog} updateMovies={() => setUpdateMovies(!updateMovies)}/>
        </Container>
    </div>
}

export default Movies;