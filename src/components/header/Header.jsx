import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AppBar, Button, Link, TextField} from "@mui/material";
import React from "react";
import './header.css'


function Header({selectedPage}) {

    // const history = useHistory();

    // const handleClick = (address) => {
    //     // history.push(`/${address}`);
    // };

    return <AppBar position="static" color='success'>
        <Toolbar>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}} className={'title'}>
                Cinematic Perspectives
            </Typography>
            <Link href={'/'}>
            <Button color="success" variant={selectedPage === 'Home' ? 'contained' : 'outlined'}
                    className={'navbar-button'}>
                Home
            </Button>
            </Link>
            <Link href={'/movies'}>
            <Button color="success" variant={selectedPage === 'Movies' ? 'contained' : 'outlined'}
                    className={'navbar-button'}>
                Movies
            </Button>
            </Link>
        </Toolbar>
    </AppBar>
}

export default Header;