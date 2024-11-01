'use client';
import { ApolloProvider } from '@apollo/client';
import { client } from '../store/client';

import './styles.css';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ApolloProvider client={client}>
        <body>{children}</body>
      </ApolloProvider>
    </html>
  );
}
