import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

import { useResponsive } from 'src/hooks/use-responsive';

import { NAV, MAIN } from './config-layout';
import AppCurrentVisits from '../../sections/overview/app-current-visits';


// ----------------------------------------------------------------------


export default function SidePanel({ children, sx, ...other }) {
  const lgUp = useResponsive('up', 'lg');

  return (
    <Box
      component="nav"
      sx={{
        flexGrow: 1,
        minHeight: 1,
        display: 'flex',
        flexDirection: 'column',
        py: 0,
        ...(lgUp && {
          px: 2,
          py: 0,
          width: `calc(100% - (${NAV.WIDTH}px + ${MAIN.WIDTH}px))`,
        }),
        ...sx,
      }}
      {...other}
    >
         <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Views by Browser"
            chart={{
              series: [
                { label: 'Firefox', value: 4344 },
                { label: 'Explorer', value: 5435 },
                { label: 'Safari', value: 1443 },
                { label: 'Chrome', value: 4443 },
              ],
            }}
          />
        </Grid>
    </Box>
  );
}

SidePanel.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
