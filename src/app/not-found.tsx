'use client';

import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Redirect to default locale
    window.location.href = '/en';
  }, []);

  return (
    <html lang="en">
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'system-ui, sans-serif'
        }}>
          <h1>Redirecting...</h1>
          <p>Please wait while we redirect you to the site.</p>
        </div>
      </body>
    </html>
  );
}
