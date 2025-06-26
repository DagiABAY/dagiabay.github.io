import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box, Button } from '@mui/material';
import { AiOutlineHome, AiOutlineUser, AiOutlineFundProjectionScreen, AiFillStar } from 'react-icons/ai';
import { CgFileDocument, CgGitFork } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import logo from '../assets/dlogo3.png'; // Adjust the path as necessary
import { HomeWork } from '@mui/icons-material';


function TopBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { text: 'Home', icon: <AiOutlineHome />, path: '/' },
        { text: 'About', icon: <AiOutlineUser />, path: '/about' },
        { text: 'Experience', icon: <HomeWork />, path: '/experience' },
        { text: 'Projects', icon: <AiOutlineFundProjectionScreen />, path: '/projects' },
        { text: 'Resume', icon: <CgFileDocument />, path: '/resume' },
        // { text: 'Blogs', icon: <ImBlog />, path: '/blogs', external: true, href: 'https://themayanow.substack.com/' },
    ];

    const renderMenu = (
        <Menu 
            anchorEl={anchorEl} 
            open={isMenuOpen} 
            onClose={handleMenuClose} 
            sx={{ mt: 1 ,
                backgroundColor: 'transparent',
            }}
        >
            {menuItems.map((item) => (
                <MenuItem 
                    key={item.text} 
                    onClick={handleMenuClose} 
                    component={Link} 
                    to={item.path} 
                    sx={{
                        color: 'primary.main', // Menu item color
                        '&:hover': {
                            backgroundColor: 'primary.main', // Optional hover effect
                        }
                    }}
                >
                    {item.icon}
                    <Typography sx={{ ml: 1, color: 'primary.main' }}>{item.text}</Typography>
                </MenuItem>
            ))}
        </Menu>
    );

    return (
        <AppBar position="fixed" color="transparent">
            <Toolbar>
                {/* Logo Section */}
                <Typography
                    variant="h6"
                    component={Link}
                    to="/"
                    sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}
                >
                    <img src={logo} alt="brand" style={{ height: 90, width: 150 }} />
                </Typography>

                {/* Desktop Menu */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {menuItems.map((item) => (
                        item.external ? (
                            <Button
                                key={item.text}
                                color="inherit"
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                startIcon={item.icon}
                                sx={{ color: 'white', mr: 2 }} // Add right margin
                            >
                                {item.text}
                            </Button>
                        ) : (
                            <Button
                                key={item.text}
                                color="inherit"
                                component={Link}
                                to={item.path}
                                startIcon={item.icon}
                                sx={{ color: 'white', mr: 2 }} 
                            >
                                {item.text}
                            </Button>
                        )
                    ))}
                    <Button
                        color="white"
                        href="https://www.linkedin.com/in/dagim-awulachew-614288231/"
                        target="_blank"
                        startIcon={<CgGitFork />}
                        sx={{ color: 'black', mr: 2, backgroundColor: 'white' }} 
                    >
                        <AiFillStar />
                    </Button>
                </Box>

                {/* Mobile Menu Icon */}
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuOpen}
                        sx={{
                            color: 'primary.main', 
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                            '&.MuiIconButton-root.Mui-focusVisible': {
                                backgroundColor: 'transparent', 
                            }
                        }}
                    >
                        <MenuIcon sx={{ color: 'primary.main' }} /> 
                    </IconButton>
                </Box>
            </Toolbar>
            {renderMenu}
        </AppBar>
    );
}

export default TopBar;
