import React, { FC } from 'react';
import { AppBar, Box, Link, Toolbar, Typography } from '@material-ui/core';

import image from './../../img/logo-white.png';

export const Header: FC = (props) => {
  return (
    <AppBar>
      <Toolbar>
        <Box
          display="flex"
          flex="1"
          flexDirection="row"
          justifyContent="space-between"
          alignContent="center"
        >
          <a href="https://www.morcmtb.org">
            <img src={image} alt="morcmtb.org" style={{ height: 50 }} />
          </a>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            alignContent="center"
          >
            {menu_items.map((item, i) => {
              return (
                <Typography key={i}>
                  <Link color="inherit" href={item.link}>
                    {item.display}
                  </Link>
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const menu_items = [
  { display: 'NEWS', link: 'https://www.morcmtb.org/news' },
  { display: 'TRAILS', link: 'https://www.morcmtb.org/trails' },
  { display: 'CONDITIONS', link: 'https://trails.morcmtb.org/' },
  { display: 'PARTNERS', link: 'https://www.morcmtb.org/paartners' },
  { display: 'SUPPORT', link: 'https://www.morcmtb.org/join' },
  { display: 'ABOUT', link: 'https://www.morcmtb.org/about' },
  { display: 'MORC SWAG SHOP', link: 'https://teespring.com/stores/morc' },
];
