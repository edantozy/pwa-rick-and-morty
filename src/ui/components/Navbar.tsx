import { AppBar, Toolbar, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch } from 'react-redux'
import { openSidebar } from '../../store/slices/ui'

export const Navbar = () => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(openSidebar())
    }
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="white" component="div">
                    Rick&Morty
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
