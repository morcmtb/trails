import React from 'react';
import { AppBar, Box, Button, Container, Toolbar, IconButton, Link, Menu, MenuItem, Typography } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const navigation = [
    { name: 'Conditions', href: 'https://trails.morcmtb.org/', current: true },
    { name: 'Partners', href: 'https://www.morcmtb.org/partners', current: false },
    { name: 'Join', href: 'https://www.morcmtb.org/store', current: false },
    { name: 'Donate', href: 'https://www.morcmtb.org/donate', current: false },
    { name: 'Store', href: 'https://www.morcmtb.org/store', current: false },
];

export function Header({ children, ...rest }) {
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar color="primary">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <a href="http://morcmtb.org">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/610d75a1d045322885a36dff/084a8b86-1fdd-4768-baf5-2c234f429232/Primary+Logo_Blue_White.png"
                                style={{ height: '25px' }}
                                alt="Morcmtb.org link"
                            />
                        </a>
                        <Box sx={{ flex: 1 }}></Box>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {navigation.map((page, idx) => (
                                <Button key={page.idx} component={Link} href={page.href} sx={{ my: 2, color: 'white' }}>
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleOpenUserMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {navigation.map((page, idx) => (
                                    <MenuItem key={idx} component={Link} href={page.href}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />
        </>
    );
}
