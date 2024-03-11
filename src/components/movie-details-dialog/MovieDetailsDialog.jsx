import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material";
import Typography from "@mui/material/Typography";
import './movie-details-dialog.css'

const MovieDetailsDialog = ({isOpen, movie, averageRating, handleClose}) => {

    console.log(movie)

    return <Dialog open={isOpen} onClose={handleClose} className={'dialog'}>
        <DialogTitle>
            <Typography className={'title'}>Title: {movie?.title}</Typography>
        </DialogTitle>
        <DialogContent>
        <Typography>Description: {movie?.description}</Typography>
        <Typography>Genre: {movie?.genre}</Typography>
        <Typography>Year of release: {movie?.yearOfRelease}</Typography>
        <Typography>Average rating: {averageRating}</Typography>
        </DialogContent>
        <DialogActions>
            <Button size={'small'} color={'error'} variant={'contained'} onClick={handleClose}>Close</Button>
        </DialogActions>
    </Dialog>
}

export default MovieDetailsDialog;