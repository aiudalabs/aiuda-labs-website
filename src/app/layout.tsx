export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This is just a wrapper for not-found.tsx
  // The actual layout is in [locale]/layout.tsx
  return children;
}
