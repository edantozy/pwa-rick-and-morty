import { useDispatch, useSelector } from 'react-redux'
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import CameraRollIcon from '@mui/icons-material/CameraRoll'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import HomeIcon from '@mui/icons-material/Home'
import { RootState } from "../../store"
import { closeSidebar } from "../../store/slices/ui"
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
    const { openSidebar } = useSelector((state: RootState) => state.ui)
    const dispatch = useDispatch()
    const handleClose = () => {
        dispatch(closeSidebar())
    }
    return (
        <Drawer
            anchor="left"
            open={openSidebar}
            onClose={handleClose}
        >
            <Box sx={{ minWidth: '250px' }}>
                <List>
                    <NavLink to="/">
                        <ListItem button onClick={handleClose}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/search">
                        <ListItem button onClick={handleClose}>
                            <ListItemIcon>
                                <ManageSearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Search" />
                        </ListItem>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <NavLink to="/characters">
                        <ListItem button onClick={handleClose}>
                            <ListItemIcon>
                                <EmojiPeopleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Characters" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/episodes">
                        <ListItem button onClick={handleClose}>
                            <ListItemIcon>
                                <CameraRollIcon />
                            </ListItemIcon>
                            <ListItemText primary="Episodes" />
                        </ListItem>
                    </NavLink>
                </List>
            </Box>

        </Drawer>
    )
}
