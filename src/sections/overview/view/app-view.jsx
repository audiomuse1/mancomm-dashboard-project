import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';

import AppTopSummary from '../app-top-summary';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';


// ----------------------------------------------------------------------

export default function AppView() {
  return (
    <Container maxWidth="xl">
   
      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Sessions"
            total={2100}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
            style={{ backgroundColor: '#6B75CA', color: "#ffffff", borderRadius: "0 0 16px 16px", height: "200px"}}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Total Visitors"
            total={1228}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
            style={{ backgroundColor: '#ffffff', color: "#000000", borderRadius: "0 0 16px 16px", height: "160px"}}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Time Spent (Hr)"
            total={6.92}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
            style={{ backgroundColor: '#ffffff', color: "#000000", borderRadius: "0 0 16px 16px", height: "160px"}}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Average Requests Received"
            total={2.3}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
            style={{ backgroundColor: '#ffffff', color: "#000000", borderRadius: "0 0 16px 16px", height: "160px"}}
          />
        </Grid>

        <Grid xs={12} md={6} lg={12}>
          <AppWebsiteVisits
            title="Sessions Overview"
            subheader="01/15/19 - 01/28/19"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Americas',
                  type: 'line',
                  fill: 'solid',
                  data: [63, 31, 42, 57, 53, 42, 57, 51, 44, 22, 30],
                },
                {
                  name: 'Asia',
                  type: 'line',
                  fill: 'solid',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Europe',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
                {
                  name: 'Africa',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>


        <Grid xs={12} sm={6} md={3}>
          <AppTopSummary
            title="Top Platform"
            total={2100}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppTopSummary
            title="Top Sources"
            total={1228}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppTopSummary
            title="Top Browser"
            total={6.92}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppTopSummary
            title="Average Requests Received"
            total={2.3}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>





        
      </Grid>
    </Container>
  );
}
