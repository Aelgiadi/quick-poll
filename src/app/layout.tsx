import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { PollBase } from './_components/Poll/PollBase';
import { PollContextProvider } from './_storage/PollContext';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={roboto.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <PollContextProvider>
              <PollBase>{children}</PollBase>
            </PollContextProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
