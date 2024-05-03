import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Andrew Hartford - Mancomm Dashboard Exercise</title>
      </Helmet>

      <AppView />
    </>
  );
}
