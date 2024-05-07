import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import Nav from './nav';
import Main from './main';
import SidePanel from './sidepanel';
// ----------------------------------------------------------------------

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (


      <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>

        <SidePanel> {children}</SidePanel>
      </Box>

  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
