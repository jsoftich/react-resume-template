import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import type {JSX} from 'react';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
});

export default MyApp;
