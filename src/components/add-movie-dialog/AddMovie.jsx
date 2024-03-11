import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import Typography from "@mui/material/Typography";
import MoviesRepository from "../../repositories/MoviesRepository";
import './add-movie.css'

const AddMovie = ({isOpen, handleClose, updateMovies}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');

    const addMovie = () => {
        MoviesRepository.addMovie(title,description,year,genre.toUpperCase());
        updateMovies();
        handleClose();
    };

    return (
        <Dialog open={isOpen} onClose={handleClose}>
            <DialogTitle className={'title'}>Add a movie</DialogTitle>
            <DialogContent>
                <Typography>Title:</Typography>
                <TextField id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/>
                <Typography>Description:</Typography>
                <TextField id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <br/>
                <Typography>Year Of Release:</Typography>
                <TextField id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                <br/>
                <Typography>Genre:</Typography>
                <Select className={'select'} value={genre} onChange={(e) => setGenre(e.target.value)} id="genre">
                    <MenuItem value={'Horror'}>Horror</MenuItem>
                    <MenuItem value={'Comedy'}>Comedy</MenuItem>
                    <MenuItem value={'Thriller'}>Thriller</MenuItem>
                    <MenuItem value={'Drama'}>Drama</MenuItem>
                    <MenuItem value={'Romance'}>Romance</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button size={'small'} color={'success'} variant={'contained'} onClick={() => addMovie()}>Add Movie</Button>
                <Button size={'small'} color={'error'} variant={'contained'} onClick={handleClose}>Cancel</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddMovie;
