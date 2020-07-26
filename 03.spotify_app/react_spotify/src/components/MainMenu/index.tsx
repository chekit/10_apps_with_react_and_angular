import { createStyles, makeStyles, Theme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
    color: #444;
    display: block;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;
    text-decoration: none;
    transition: color 1.5s ease-in-out;

    &:hover {
        color: black;
    }
`;

function MainMenu() {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
        }),
    );

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => handleClose()}>
                        <StyledLink to="/" activeClassName="selected">Home</StyledLink>
                    </MenuItem>
                    <MenuItem onClick={() => handleClose()}>
                        <StyledLink to="/about" activeClassName="selected">About</StyledLink>
                    </MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>React Spotify App</Typography>
            </Toolbar>
        </AppBar>
    );
}

export default MainMenu;