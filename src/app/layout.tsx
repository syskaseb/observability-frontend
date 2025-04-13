import { ReactNode } from 'react';
import ReduxProvider from './providers/ReduxProvider';
import './globals.css';

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <head>
            <title>Observability Frontend</title>
            <meta name="description" content="Manage and review applicants in our dashboard" />
        </head>
        <body>
        <ReduxProvider>{children}</ReduxProvider>
        </body>
        </html>
    );
}
